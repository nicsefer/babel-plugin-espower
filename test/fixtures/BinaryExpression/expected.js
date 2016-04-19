'use strict';

var _powerAssertVisitorKeys = '{"ArrayExpression":["elements"],"AssignmentExpression":["left","right"],"BinaryExpression":["left","right"],"Directive":["value"],"DirectiveLiteral":[],"BlockStatement":["directives","body"],"BreakStatement":["label"],"CallExpression":["callee","arguments"],"CatchClause":["param","body"],"ConditionalExpression":["test","consequent","alternate"],"ContinueStatement":["label"],"DebuggerStatement":[],"DoWhileStatement":["test","body"],"EmptyStatement":[],"ExpressionStatement":["expression"],"File":["program"],"ForInStatement":["left","right","body"],"ForStatement":["init","test","update","body"],"FunctionDeclaration":["id","params","body","returnType","typeParameters"],"FunctionExpression":["id","params","body","returnType","typeParameters"],"Identifier":["typeAnnotation"],"IfStatement":["test","consequent","alternate"],"LabeledStatement":["label","body"],"StringLiteral":[],"NumericLiteral":[],"NullLiteral":[],"BooleanLiteral":[],"RegExpLiteral":[],"LogicalExpression":["left","right"],"MemberExpression":["object","property"],"NewExpression":["callee","arguments"],"Program":["directives","body"],"ObjectExpression":["properties"],"ObjectMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectProperty":["key","value","decorators"],"RestElement":["argument","typeAnnotation"],"ReturnStatement":["argument"],"SequenceExpression":["expressions"],"SwitchCase":["test","consequent"],"SwitchStatement":["discriminant","cases"],"ThisExpression":[],"ThrowStatement":["argument"],"TryStatement":["block","handler","finalizer"],"UnaryExpression":["argument"],"UpdateExpression":["argument"],"VariableDeclaration":["declarations"],"VariableDeclarator":["id","init"],"WhileStatement":["test","body"],"WithStatement":["object","body"],"AssignmentPattern":["left","right"],"ArrayPattern":["elements","typeAnnotation"],"ArrowFunctionExpression":["params","body","returnType"],"ClassBody":["body"],"ClassDeclaration":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ClassExpression":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ExportAllDeclaration":["source"],"ExportDefaultDeclaration":["declaration"],"ExportNamedDeclaration":["declaration","specifiers","source"],"ExportSpecifier":["local","exported"],"ForOfStatement":["left","right","body"],"ImportDeclaration":["specifiers","source"],"ImportDefaultSpecifier":["local"],"ImportNamespaceSpecifier":["local"],"ImportSpecifier":["local","imported"],"MetaProperty":["meta","property"],"ClassMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectPattern":["properties","typeAnnotation"],"SpreadElement":["argument"],"Super":[],"TaggedTemplateExpression":["tag","quasi"],"TemplateElement":[],"TemplateLiteral":["quasis","expressions"],"YieldExpression":["argument"],"AnyTypeAnnotation":[],"ArrayTypeAnnotation":["elementType"],"BooleanTypeAnnotation":[],"BooleanLiteralTypeAnnotation":[],"NullLiteralTypeAnnotation":[],"ClassImplements":["id","typeParameters"],"ClassProperty":["key","value","typeAnnotation","decorators"],"DeclareClass":["id","typeParameters","extends","body"],"DeclareFunction":["id"],"DeclareInterface":["id","typeParameters","extends","body"],"DeclareModule":["id","body"],"DeclareTypeAlias":["id","typeParameters","right"],"DeclareVariable":["id"],"ExistentialTypeParam":[],"FunctionTypeAnnotation":["typeParameters","params","rest","returnType"],"FunctionTypeParam":["name","typeAnnotation"],"GenericTypeAnnotation":["id","typeParameters"],"InterfaceExtends":["id","typeParameters"],"InterfaceDeclaration":["id","typeParameters","extends","body"],"IntersectionTypeAnnotation":["types"],"MixedTypeAnnotation":[],"NullableTypeAnnotation":["typeAnnotation"],"NumericLiteralTypeAnnotation":[],"NumberTypeAnnotation":[],"StringLiteralTypeAnnotation":[],"StringTypeAnnotation":[],"ThisTypeAnnotation":[],"TupleTypeAnnotation":["types"],"TypeofTypeAnnotation":["argument"],"TypeAlias":["id","typeParameters","right"],"TypeAnnotation":["typeAnnotation"],"TypeCastExpression":["expression","typeAnnotation"],"TypeParameterDeclaration":["params"],"TypeParameterInstantiation":["params"],"ObjectTypeAnnotation":["properties","indexers","callProperties"],"ObjectTypeCallProperty":["value"],"ObjectTypeIndexer":["id","key","value"],"ObjectTypeProperty":["key","value"],"QualifiedTypeIdentifier":["id","qualification"],"UnionTypeAnnotation":["types"],"VoidTypeAnnotation":[],"JSXAttribute":["name","value"],"JSXClosingElement":["name"],"JSXElement":["openingElement","children","closingElement"],"JSXEmptyExpression":[],"JSXExpressionContainer":["expression"],"JSXIdentifier":[],"JSXMemberExpression":["object","property"],"JSXNamespacedName":["namespace","name"],"JSXOpeningElement":["name","attributes"],"JSXSpreadAttribute":["argument"],"JSXText":[],"Noop":[],"ParenthesizedExpression":["expression"],"AwaitExpression":["argument"],"BindExpression":["object","callee"],"Decorator":["expression"],"DoExpression":["body"],"ExportDefaultSpecifier":["exported"],"ExportNamespaceSpecifier":["exported"],"RestProperty":["argument"],"SpreadProperty":["argument"]}',
    _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { return { powerAssertContext: { value: value, events: this.captured }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder(),
    _rec5 = new _powerAssertRecorder(),
    _rec6 = new _powerAssertRecorder(),
    _rec7 = new _powerAssertRecorder(),
    _rec8 = new _powerAssertRecorder(),
    _rec9 = new _powerAssertRecorder();

assert(_rec._expr(_rec._capt(4 !== 4, 'arguments/0'), {
  content: 'assert(4 !== 4)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 3,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"!==","left":{"type":"NumericLiteral","value":4,"range":[7,8]},"right":{"type":"NumericLiteral","value":4,"range":[13,14]},"range":[7,14]}],"range":[0,15]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"num"},"value":4,"range":[7,8]},{"type":{"label":"==/!="},"value":"!==","range":[9,12]},{"type":{"label":"num"},"value":4,"range":[13,14]},{"type":{"label":")"},"range":[14,15]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec2._expr(_rec2._capt(_rec2._capt(fuga, 'arguments/0/left') !== 4, 'arguments/0'), {
  content: 'assert(fuga !== 4)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 5,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"!==","left":{"type":"Identifier","name":"fuga","range":[7,11]},"right":{"type":"NumericLiteral","value":4,"range":[16,17]},"range":[7,17]}],"range":[0,18]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"fuga","range":[7,11]},{"type":{"label":"==/!="},"value":"!==","range":[12,15]},{"type":{"label":"num"},"value":4,"range":[16,17]},{"type":{"label":")"},"range":[17,18]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec3._expr(_rec3._capt(_rec3._capt(fuga, 'arguments/0/left') === _rec3._capt(piyo, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(fuga === piyo)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 7,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"===","left":{"type":"Identifier","name":"fuga","range":[7,11]},"right":{"type":"Identifier","name":"piyo","range":[16,20]},"range":[7,20]}],"range":[0,21]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"fuga","range":[7,11]},{"type":{"label":"==/!="},"value":"===","range":[12,15]},{"type":{"label":"name"},"value":"piyo","range":[16,20]},{"type":{"label":")"},"range":[20,21]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec4._expr(_rec4._capt(_rec4._capt(fuga, 'arguments/0/left') === _rec4._capt(piyo, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(fuga === piyo)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 9,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"===","left":{"type":"Identifier","name":"fuga","range":[7,11]},"right":{"type":"Identifier","name":"piyo","range":[16,20]},"range":[7,20]}],"range":[0,21]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"fuga","range":[7,11]},{"type":{"label":"==/!="},"value":"===","range":[12,15]},{"type":{"label":"name"},"value":"piyo","range":[16,20]},{"type":{"label":")"},"range":[20,21]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec5._expr(_rec5._capt(_rec5._capt(fuga, 'arguments/0/left') === _rec5._capt(piyo, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(fuga === piyo)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 13,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"===","left":{"type":"Identifier","name":"fuga","range":[7,11]},"right":{"type":"Identifier","name":"piyo","range":[16,20]},"range":[7,20]}],"range":[0,21]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"fuga","range":[7,11]},{"type":{"label":"==/!="},"value":"===","range":[12,15]},{"type":{"label":"name"},"value":"piyo","range":[16,20]},{"type":{"label":")"},"range":[20,21]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec6._expr(_rec6._capt(_rec6._capt(fuga, 'arguments/0/left') !== _rec6._capt(piyo, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(fuga !== piyo)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 15,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"!==","left":{"type":"Identifier","name":"fuga","range":[7,11]},"right":{"type":"Identifier","name":"piyo","range":[16,20]},"range":[7,20]}],"range":[0,21]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"fuga","range":[7,11]},{"type":{"label":"==/!="},"value":"!==","range":[12,15]},{"type":{"label":"name"},"value":"piyo","range":[16,20]},{"type":{"label":")"},"range":[20,21]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert.ok(_rec7._expr(_rec7._capt(_rec7._capt(hoge, 'arguments/0/left') === _rec7._capt(fuga, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert.ok(hoge === fuga, \'comment\')',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 17,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"ok","range":[7,9]},"computed":false,"range":[0,9]},"arguments":[{"type":"BinaryExpression","operator":"===","left":{"type":"Identifier","name":"hoge","range":[10,14]},"right":{"type":"Identifier","name":"fuga","range":[19,23]},"range":[10,23]},{"type":"StringLiteral","value":"comment","range":[25,34]}],"range":[0,35]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"ok","range":[7,9]},{"type":{"label":"("},"range":[9,10]},{"type":{"label":"name"},"value":"hoge","range":[10,14]},{"type":{"label":"==/!="},"value":"===","range":[15,18]},{"type":{"label":"name"},"value":"fuga","range":[19,23]},{"type":{"label":","},"range":[23,24]},{"type":{"label":"string"},"value":"comment","range":[25,34]},{"type":{"label":")"},"range":[34,35]}]',
  visitorKeys: _powerAssertVisitorKeys
}), 'comment');

assert(_rec8._expr(_rec8._capt(_rec8._capt(_rec8._capt(ary1, 'arguments/0/left/object').length, 'arguments/0/left') === _rec8._capt(_rec8._capt(ary2, 'arguments/0/right/object').length, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(ary1.length === ary2.length)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 19,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"===","left":{"type":"MemberExpression","object":{"type":"Identifier","name":"ary1","range":[7,11]},"property":{"type":"Identifier","name":"length","range":[12,18]},"computed":false,"range":[7,18]},"right":{"type":"MemberExpression","object":{"type":"Identifier","name":"ary2","range":[23,27]},"property":{"type":"Identifier","name":"length","range":[28,34]},"computed":false,"range":[23,34]},"range":[7,34]}],"range":[0,35]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"ary1","range":[7,11]},{"type":{"label":"."},"range":[11,12]},{"type":{"label":"name"},"value":"length","range":[12,18]},{"type":{"label":"==/!="},"value":"===","range":[19,22]},{"type":{"label":"name"},"value":"ary2","range":[23,27]},{"type":{"label":"."},"range":[27,28]},{"type":{"label":"name"},"value":"length","range":[28,34]},{"type":{"label":")"},"range":[34,35]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec9._expr(_rec9._capt(_rec9._capt(foo, 'arguments/0/left') instanceof _rec9._capt(Foo, 'arguments/0/right'), 'arguments/0'), {
  content: 'assert(foo instanceof Foo)',
  filepath: 'test/fixtures/BinaryExpression/fixture.js',
  line: 21,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"BinaryExpression","operator":"instanceof","left":{"type":"Identifier","name":"foo","range":[7,10]},"right":{"type":"Identifier","name":"Foo","range":[22,25]},"range":[7,25]}],"range":[0,26]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"foo","range":[7,10]},{"type":{"label":"instanceof"},"value":"instanceof","range":[11,21]},{"type":{"label":"name"},"value":"Foo","range":[22,25]},{"type":{"label":")"},"range":[25,26]}]',
  visitorKeys: _powerAssertVisitorKeys
}));
