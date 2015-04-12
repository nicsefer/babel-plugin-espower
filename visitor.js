var espower = require('espower');
var escallmatch = require('escallmatch');
var matchers = espower.defaultOptions().patterns.map(escallmatch);
var t = require('babel-core').types;

function enterTraversalPath (traversalPath, currentNode, parentNode, scope, file) {
    var path = esPath(traversalPath);
    var currentPath = path ? path[path.length - 1] : null;
    var assertionVisitor = traversalPath.state.data['espowerAssertionVisitor'];
    if (assertionVisitor) {
        // console.log('########## found assertionVisitor ' + path.join('/'));
        if (espower.rules.toBeSkipped(currentNode, parentNode, currentPath)) {
            traversalPath.state.data['espowerSkipping'] = true;
        }
        if (!assertionVisitor.isCapturingArgument()) {
            // console.log('########## entering argument ' + path.join('/'));
            assertionVisitor.enterArgument(currentNode, parentNode, path);
        }
    } else {
        var candidates = matchers.filter(function (matcher) { return matcher.test(currentNode); });
        if (candidates.length === 1) {
            // console.log('########## entering assertion ' + path.join('/'));
            assertionVisitor = new espower.AssertionVisitor(candidates[0], path);
            assertionVisitor.enter(currentNode, parentNode);
            traversalPath.state.data['espowerAssertionVisitor'] = assertionVisitor;
        }
    }
}

function exitTraversalPath (traversalPath, currentNode, parentNode, scope, file) {
    var path = esPath(traversalPath);
    var resultTree = currentNode;
    var assertionVisitor = traversalPath.state.data['espowerAssertionVisitor'];
    if (!assertionVisitor) {
        return;
    }
    if (traversalPath.state.data['espowerSkipping']) {
        // console.log('########## skipping ' + path.join('/'));
        traversalPath.state.data['espowerSkipping'] = false;
        return;
    }
    if (assertionVisitor.isLeavingAssertion(path)) {
        // console.log('########## leaving assertion ' + path.join('/'));
        delete traversalPath.state.data['espowerAssertionVisitor'];
        return;
    }
    if (!assertionVisitor.isCapturingArgument()) {
        return;
    }
    if (isCalleeOfParent(currentNode, parentNode)) {
        return;
    }
    if (espower.rules.toBeCaptured(currentNode)) {
        // console.log('########## capturing ' + path.join('/'));
        resultTree = assertionVisitor.captureNode(currentNode, path);
        if (assertionVisitor.isLeavingArgument(path)) {
            // console.log('########## wrap argument ' + path.join('/'));
            resultTree = assertionVisitor.leaveArgument(resultTree);
        }
        traversalPath.replaceWith(resultTree);
    }
}

function esPath (traversalPath) {
    var ancestors = [];
    traverseUp(ancestors, traversalPath);
    ancestors.reverse();
    return ancestors;
}

function traverseUp (ancestors, traversalPath) {
    ancestors.push(traversalPath.key);
    if (Array.isArray(traversalPath.container)) { // traversing array via TraversalContext#visitMultiple
        var parentNode = traversalPath.parent;
        var candidateKeys = t.VISITOR_KEYS[parentNode.type].filter(function (key) {
            return parentNode[key] === traversalPath.container; // searching for current key in parentNode
        });
        if (candidateKeys.length === 1) {
            var currentTraversingKey = candidateKeys[0]; // ex. 'arguments' in CallExpression
            ancestors.push(currentTraversingKey);
        }
    }
    if (traversalPath.parentPath !== traversalPath) { // root node
        traverseUp(ancestors, traversalPath.parentPath);
    }
}

function isCalleeOfParent(currentNode, parentNode) {
    return (parentNode.type === 'CallExpression' || parentNode.type === 'NewExpression') &&
        parentNode.callee === currentNode;
}

module.exports = function visitor () {
    return espower.rules.supportedNodeTypes.reduce(function (proto, nodeType) {
        proto[nodeType] = {
            enter: function (currentNode, parentNode, scope, file) {
                enterTraversalPath(this, currentNode, parentNode, scope, file);
            },
            exit: function (currentNode, parentNode, scope, file) {
                exitTraversalPath(this, currentNode, parentNode, scope, file);
            }
        };
        return proto;
    }, {});
};
