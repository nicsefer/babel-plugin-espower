'use strict';

var _powerAssertVisitorKeys = '{"ArrayExpression":["elements"],"AssignmentExpression":["left","right"],"BinaryExpression":["left","right"],"Directive":["value"],"DirectiveLiteral":[],"BlockStatement":["directives","body"],"BreakStatement":["label"],"CallExpression":["callee","arguments"],"CatchClause":["param","body"],"ConditionalExpression":["test","consequent","alternate"],"ContinueStatement":["label"],"DebuggerStatement":[],"DoWhileStatement":["test","body"],"EmptyStatement":[],"ExpressionStatement":["expression"],"File":["program"],"ForInStatement":["left","right","body"],"ForStatement":["init","test","update","body"],"FunctionDeclaration":["id","params","body","returnType","typeParameters"],"FunctionExpression":["id","params","body","returnType","typeParameters"],"Identifier":["typeAnnotation"],"IfStatement":["test","consequent","alternate"],"LabeledStatement":["label","body"],"StringLiteral":[],"NumericLiteral":[],"NullLiteral":[],"BooleanLiteral":[],"RegExpLiteral":[],"LogicalExpression":["left","right"],"MemberExpression":["object","property"],"NewExpression":["callee","arguments"],"Program":["directives","body"],"ObjectExpression":["properties"],"ObjectMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectProperty":["key","value","decorators"],"RestElement":["argument","typeAnnotation"],"ReturnStatement":["argument"],"SequenceExpression":["expressions"],"SwitchCase":["test","consequent"],"SwitchStatement":["discriminant","cases"],"ThisExpression":[],"ThrowStatement":["argument"],"TryStatement":["block","handler","finalizer"],"UnaryExpression":["argument"],"UpdateExpression":["argument"],"VariableDeclaration":["declarations"],"VariableDeclarator":["id","init"],"WhileStatement":["test","body"],"WithStatement":["object","body"],"AssignmentPattern":["left","right"],"ArrayPattern":["elements","typeAnnotation"],"ArrowFunctionExpression":["params","body","returnType","typeParameters"],"ClassBody":["body"],"ClassDeclaration":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ClassExpression":["id","body","superClass","mixins","typeParameters","superTypeParameters","implements","decorators"],"ExportAllDeclaration":["source"],"ExportDefaultDeclaration":["declaration"],"ExportNamedDeclaration":["declaration","specifiers","source"],"ExportSpecifier":["local","exported"],"ForOfStatement":["left","right","body"],"ImportDeclaration":["specifiers","source"],"ImportDefaultSpecifier":["local"],"ImportNamespaceSpecifier":["local"],"ImportSpecifier":["local","imported"],"MetaProperty":["meta","property"],"ClassMethod":["key","params","body","decorators","returnType","typeParameters"],"ObjectPattern":["properties","typeAnnotation"],"SpreadElement":["argument"],"Super":[],"TaggedTemplateExpression":["tag","quasi"],"TemplateElement":[],"TemplateLiteral":["quasis","expressions"],"YieldExpression":["argument"],"AnyTypeAnnotation":[],"ArrayTypeAnnotation":["elementType"],"BooleanTypeAnnotation":[],"BooleanLiteralTypeAnnotation":[],"NullLiteralTypeAnnotation":[],"ClassImplements":["id","typeParameters"],"ClassProperty":["key","value","typeAnnotation","decorators"],"DeclareClass":["id","typeParameters","extends","body"],"DeclareFunction":["id"],"DeclareInterface":["id","typeParameters","extends","body"],"DeclareModule":["id","body"],"DeclareModuleExports":["typeAnnotation"],"DeclareTypeAlias":["id","typeParameters","right"],"DeclareVariable":["id"],"ExistentialTypeParam":[],"FunctionTypeAnnotation":["typeParameters","params","rest","returnType"],"FunctionTypeParam":["name","typeAnnotation"],"GenericTypeAnnotation":["id","typeParameters"],"InterfaceExtends":["id","typeParameters"],"InterfaceDeclaration":["id","typeParameters","extends","body"],"IntersectionTypeAnnotation":["types"],"MixedTypeAnnotation":[],"EmptyTypeAnnotation":[],"NullableTypeAnnotation":["typeAnnotation"],"NumericLiteralTypeAnnotation":[],"NumberTypeAnnotation":[],"StringLiteralTypeAnnotation":[],"StringTypeAnnotation":[],"ThisTypeAnnotation":[],"TupleTypeAnnotation":["types"],"TypeofTypeAnnotation":["argument"],"TypeAlias":["id","typeParameters","right"],"TypeAnnotation":["typeAnnotation"],"TypeCastExpression":["expression","typeAnnotation"],"TypeParameter":["bound"],"TypeParameterDeclaration":["params"],"TypeParameterInstantiation":["params"],"ObjectTypeAnnotation":["properties","indexers","callProperties"],"ObjectTypeCallProperty":["value"],"ObjectTypeIndexer":["id","key","value"],"ObjectTypeProperty":["key","value"],"QualifiedTypeIdentifier":["id","qualification"],"UnionTypeAnnotation":["types"],"VoidTypeAnnotation":[],"JSXAttribute":["name","value"],"JSXClosingElement":["name"],"JSXElement":["openingElement","children","closingElement"],"JSXEmptyExpression":[],"JSXExpressionContainer":["expression"],"JSXSpreadChild":["expression"],"JSXIdentifier":[],"JSXMemberExpression":["object","property"],"JSXNamespacedName":["namespace","name"],"JSXOpeningElement":["name","attributes"],"JSXSpreadAttribute":["argument"],"JSXText":[],"Noop":[],"ParenthesizedExpression":["expression"],"AwaitExpression":["argument"],"ForAwaitStatement":["left","right","body"],"BindExpression":["object","callee"],"Import":[],"Decorator":["expression"],"DoExpression":["body"],"ExportDefaultSpecifier":["exported"],"ExportNamespaceSpecifier":["exported"],"RestProperty":["argument"],"SpreadProperty":["argument"]}',
    _powerAssertRecorder = function () { function PowerAssertRecorder() { this.captured = []; } PowerAssertRecorder.prototype._capt = function _capt(value, espath) { this.captured.push({ value: value, espath: espath }); return value; }; PowerAssertRecorder.prototype._expr = function _expr(value, source) { var capturedValues = this.captured; this.captured = []; return { powerAssertContext: { value: value, events: capturedValues }, source: source }; }; return PowerAssertRecorder; }(),
    _rec = new _powerAssertRecorder(),
    _rec2 = new _powerAssertRecorder(),
    _rec3 = new _powerAssertRecorder(),
    _rec4 = new _powerAssertRecorder(),
    _rec5 = new _powerAssertRecorder(),
    _rec6 = new _powerAssertRecorder(),
    _rec7 = new _powerAssertRecorder(),
    _rec8 = new _powerAssertRecorder(),
    _rec9 = new _powerAssertRecorder(),
    _rec10 = new _powerAssertRecorder(),
    _rec11 = new _powerAssertRecorder(),
    _rec12 = new _powerAssertRecorder();

assert(_rec._expr(_rec._capt(_rec._capt(foo, 'arguments/0/object').bar, 'arguments/0'), {
  content: 'assert(foo.bar)',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 3,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"MemberExpression","object":{"type":"Identifier","name":"foo","range":[7,10]},"property":{"type":"Identifier","name":"bar","range":[11,14]},"computed":false,"range":[7,14]}],"range":[0,15]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"foo","range":[7,10]},{"type":{"label":"."},"range":[10,11]},{"type":{"label":"name"},"value":"bar","range":[11,14]},{"type":{"label":")"},"range":[14,15]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec2._expr(_rec2._capt(_rec2._capt(_rec2._capt(foo, 'arguments/0/object/object').bar, 'arguments/0/object').baz, 'arguments/0'), {
  content: 'assert(foo.bar.baz)',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 5,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"MemberExpression","object":{"type":"MemberExpression","object":{"type":"Identifier","name":"foo","range":[7,10]},"property":{"type":"Identifier","name":"bar","range":[11,14]},"computed":false,"range":[7,14]},"property":{"type":"Identifier","name":"baz","range":[15,18]},"computed":false,"range":[7,18]}],"range":[0,19]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"foo","range":[7,10]},{"type":{"label":"."},"range":[10,11]},{"type":{"label":"name"},"value":"bar","range":[11,14]},{"type":{"label":"."},"range":[14,15]},{"type":{"label":"name"},"value":"baz","range":[15,18]},{"type":{"label":")"},"range":[18,19]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec3._expr(_rec3._capt(_rec3._capt(foo, 'arguments/0/object')['bar'], 'arguments/0'), {
  content: 'assert(foo[\'bar\'])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 7,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"MemberExpression","object":{"type":"Identifier","name":"foo","range":[7,10]},"property":{"type":"StringLiteral","value":"bar","range":[11,16]},"computed":true,"range":[7,17]}],"range":[0,18]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"foo","range":[7,10]},{"type":{"label":"["},"range":[10,11]},{"type":{"label":"string"},"value":"bar","range":[11,16]},{"type":{"label":"]"},"range":[16,17]},{"type":{"label":")"},"range":[17,18]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec4._expr(_rec4._capt(_rec4._capt(foo, 'arguments/0/object')[_rec4._capt(propName, 'arguments/0/property')], 'arguments/0'), {
  content: 'assert(foo[propName])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 9,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"MemberExpression","object":{"type":"Identifier","name":"foo","range":[7,10]},"property":{"type":"Identifier","name":"propName","range":[11,19]},"computed":true,"range":[7,20]}],"range":[0,21]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"foo","range":[7,10]},{"type":{"label":"["},"range":[10,11]},{"type":{"label":"name"},"value":"propName","range":[11,19]},{"type":{"label":"]"},"range":[19,20]},{"type":{"label":")"},"range":[20,21]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec5._expr(_rec5._capt(_rec5._capt(foo, 'arguments/0/object')[_rec5._capt(propName, 'arguments/0/property')], 'arguments/0'), {
  content: 'assert(foo[propName])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 11,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"MemberExpression","object":{"type":"Identifier","name":"foo","range":[7,10]},"property":{"type":"Identifier","name":"propName","range":[11,19]},"computed":true,"range":[7,20]}],"range":[0,21]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"foo","range":[7,10]},{"type":{"label":"["},"range":[10,11]},{"type":{"label":"name"},"value":"propName","range":[11,19]},{"type":{"label":"]"},"range":[19,20]},{"type":{"label":")"},"range":[20,21]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec6._expr(_rec6._capt(_rec6._capt(foo, 'arguments/0/object')[_rec6._capt(func(_rec6._capt(key, 'arguments/0/property/arguments/0')), 'arguments/0/property')], 'arguments/0'), {
  content: 'assert(foo[func(key)])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 13,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"MemberExpression","object":{"type":"Identifier","name":"foo","range":[7,10]},"property":{"type":"CallExpression","callee":{"type":"Identifier","name":"func","range":[11,15]},"arguments":[{"type":"Identifier","name":"key","range":[16,19]}],"range":[11,20]},"computed":true,"range":[7,21]}],"range":[0,22]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"foo","range":[7,10]},{"type":{"label":"["},"range":[10,11]},{"type":{"label":"name"},"value":"func","range":[11,15]},{"type":{"label":"("},"range":[15,16]},{"type":{"label":"name"},"value":"key","range":[16,19]},{"type":{"label":")"},"range":[19,20]},{"type":{"label":"]"},"range":[20,21]},{"type":{"label":")"},"range":[21,22]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec7._expr(_rec7._capt(_rec7._capt(_rec7._capt(_rec7._capt(foo, 'arguments/0/object/object/object')[_rec7._capt(propName, 'arguments/0/object/object/property')], 'arguments/0/object/object')['key'], 'arguments/0/object')[_rec7._capt(_rec7._capt(keys(), 'arguments/0/property/object')['name'], 'arguments/0/property')], 'arguments/0'), {
  content: 'assert(foo[propName][\'key\'][keys()[\'name\']])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 15,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"MemberExpression","object":{"type":"MemberExpression","object":{"type":"MemberExpression","object":{"type":"Identifier","name":"foo","range":[7,10]},"property":{"type":"Identifier","name":"propName","range":[11,19]},"computed":true,"range":[7,20]},"property":{"type":"StringLiteral","value":"key","range":[21,26]},"computed":true,"range":[7,27]},"property":{"type":"MemberExpression","object":{"type":"CallExpression","callee":{"type":"Identifier","name":"keys","range":[28,32]},"arguments":[],"range":[28,34]},"property":{"type":"StringLiteral","value":"name","range":[35,41]},"computed":true,"range":[28,42]},"computed":true,"range":[7,43]}],"range":[0,44]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"foo","range":[7,10]},{"type":{"label":"["},"range":[10,11]},{"type":{"label":"name"},"value":"propName","range":[11,19]},{"type":{"label":"]"},"range":[19,20]},{"type":{"label":"["},"range":[20,21]},{"type":{"label":"string"},"value":"key","range":[21,26]},{"type":{"label":"]"},"range":[26,27]},{"type":{"label":"["},"range":[27,28]},{"type":{"label":"name"},"value":"keys","range":[28,32]},{"type":{"label":"("},"range":[32,33]},{"type":{"label":")"},"range":[33,34]},{"type":{"label":"["},"range":[34,35]},{"type":{"label":"string"},"value":"name","range":[35,41]},{"type":{"label":"]"},"range":[41,42]},{"type":{"label":"]"},"range":[42,43]},{"type":{"label":")"},"range":[43,44]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert(_rec8._expr(_rec8._capt(_rec8._capt(_rec8._capt(_rec8._capt(foo, 'arguments/0/object/object/object')[_rec8._capt(propName, 'arguments/0/object/object/property')], 'arguments/0/object/object')['key'], 'arguments/0/object')[_rec8._capt(_rec8._capt(keys(), 'arguments/0/property/object')['name'], 'arguments/0/property')], 'arguments/0'), {
  content: 'assert(foo[propName][\'key\'][keys()[\'name\']])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 17,
  ast: '{"type":"CallExpression","callee":{"type":"Identifier","name":"assert","range":[0,6]},"arguments":[{"type":"MemberExpression","object":{"type":"MemberExpression","object":{"type":"MemberExpression","object":{"type":"Identifier","name":"foo","range":[7,10]},"property":{"type":"Identifier","name":"propName","range":[11,19]},"computed":true,"range":[7,20]},"property":{"type":"StringLiteral","value":"key","range":[21,26]},"computed":true,"range":[7,27]},"property":{"type":"MemberExpression","object":{"type":"CallExpression","callee":{"type":"Identifier","name":"keys","range":[28,32]},"arguments":[],"range":[28,34]},"property":{"type":"StringLiteral","value":"name","range":[35,41]},"computed":true,"range":[28,42]},"computed":true,"range":[7,43]}],"range":[0,44]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"("},"range":[6,7]},{"type":{"label":"name"},"value":"foo","range":[7,10]},{"type":{"label":"["},"range":[10,11]},{"type":{"label":"name"},"value":"propName","range":[11,19]},{"type":{"label":"]"},"range":[19,20]},{"type":{"label":"["},"range":[20,21]},{"type":{"label":"string"},"value":"key","range":[21,26]},{"type":{"label":"]"},"range":[26,27]},{"type":{"label":"["},"range":[27,28]},{"type":{"label":"name"},"value":"keys","range":[28,32]},{"type":{"label":"("},"range":[32,33]},{"type":{"label":")"},"range":[33,34]},{"type":{"label":"["},"range":[34,35]},{"type":{"label":"string"},"value":"name","range":[35,41]},{"type":{"label":"]"},"range":[41,42]},{"type":{"label":"]"},"range":[42,43]},{"type":{"label":")"},"range":[43,44]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert.equal(_rec9._expr(_rec9._capt(_rec9._capt(ary1, 'arguments/0/object').length, 'arguments/0'), {
  content: 'assert.equal(ary1.length, ary2.length)',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 19,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"equal","range":[7,12]},"computed":false,"range":[0,12]},"arguments":[{"type":"MemberExpression","object":{"type":"Identifier","name":"ary1","range":[13,17]},"property":{"type":"Identifier","name":"length","range":[18,24]},"computed":false,"range":[13,24]},{"type":"MemberExpression","object":{"type":"Identifier","name":"ary2","range":[26,30]},"property":{"type":"Identifier","name":"length","range":[31,37]},"computed":false,"range":[26,37]}],"range":[0,38]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"equal","range":[7,12]},{"type":{"label":"("},"range":[12,13]},{"type":{"label":"name"},"value":"ary1","range":[13,17]},{"type":{"label":"."},"range":[17,18]},{"type":{"label":"name"},"value":"length","range":[18,24]},{"type":{"label":","},"range":[24,25]},{"type":{"label":"name"},"value":"ary2","range":[26,30]},{"type":{"label":"."},"range":[30,31]},{"type":{"label":"name"},"value":"length","range":[31,37]},{"type":{"label":")"},"range":[37,38]}]',
  visitorKeys: _powerAssertVisitorKeys
}), _rec10._expr(_rec10._capt(_rec10._capt(ary2, 'arguments/1/object').length, 'arguments/1'), {
  content: 'assert.equal(ary1.length, ary2.length)',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 19,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"equal","range":[7,12]},"computed":false,"range":[0,12]},"arguments":[{"type":"MemberExpression","object":{"type":"Identifier","name":"ary1","range":[13,17]},"property":{"type":"Identifier","name":"length","range":[18,24]},"computed":false,"range":[13,24]},{"type":"MemberExpression","object":{"type":"Identifier","name":"ary2","range":[26,30]},"property":{"type":"Identifier","name":"length","range":[31,37]},"computed":false,"range":[26,37]}],"range":[0,38]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"equal","range":[7,12]},{"type":{"label":"("},"range":[12,13]},{"type":{"label":"name"},"value":"ary1","range":[13,17]},{"type":{"label":"."},"range":[17,18]},{"type":{"label":"name"},"value":"length","range":[18,24]},{"type":{"label":","},"range":[24,25]},{"type":{"label":"name"},"value":"ary2","range":[26,30]},{"type":{"label":"."},"range":[30,31]},{"type":{"label":"name"},"value":"length","range":[31,37]},{"type":{"label":")"},"range":[37,38]}]',
  visitorKeys: _powerAssertVisitorKeys
}));

assert.deepEqual(_rec11._expr(_rec11._capt(_rec11._capt(foo, 'arguments/0/object').propName, 'arguments/0'), {
  content: 'assert.deepEqual(foo.propName, foo[key])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 21,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"deepEqual","range":[7,16]},"computed":false,"range":[0,16]},"arguments":[{"type":"MemberExpression","object":{"type":"Identifier","name":"foo","range":[17,20]},"property":{"type":"Identifier","name":"propName","range":[21,29]},"computed":false,"range":[17,29]},{"type":"MemberExpression","object":{"type":"Identifier","name":"foo","range":[31,34]},"property":{"type":"Identifier","name":"key","range":[35,38]},"computed":true,"range":[31,39]}],"range":[0,40]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"deepEqual","range":[7,16]},{"type":{"label":"("},"range":[16,17]},{"type":{"label":"name"},"value":"foo","range":[17,20]},{"type":{"label":"."},"range":[20,21]},{"type":{"label":"name"},"value":"propName","range":[21,29]},{"type":{"label":","},"range":[29,30]},{"type":{"label":"name"},"value":"foo","range":[31,34]},{"type":{"label":"["},"range":[34,35]},{"type":{"label":"name"},"value":"key","range":[35,38]},{"type":{"label":"]"},"range":[38,39]},{"type":{"label":")"},"range":[39,40]}]',
  visitorKeys: _powerAssertVisitorKeys
}), _rec12._expr(_rec12._capt(_rec12._capt(foo, 'arguments/1/object')[_rec12._capt(key, 'arguments/1/property')], 'arguments/1'), {
  content: 'assert.deepEqual(foo.propName, foo[key])',
  filepath: 'test/fixtures/MemberExpression/fixture.js',
  line: 21,
  ast: '{"type":"CallExpression","callee":{"type":"MemberExpression","object":{"type":"Identifier","name":"assert","range":[0,6]},"property":{"type":"Identifier","name":"deepEqual","range":[7,16]},"computed":false,"range":[0,16]},"arguments":[{"type":"MemberExpression","object":{"type":"Identifier","name":"foo","range":[17,20]},"property":{"type":"Identifier","name":"propName","range":[21,29]},"computed":false,"range":[17,29]},{"type":"MemberExpression","object":{"type":"Identifier","name":"foo","range":[31,34]},"property":{"type":"Identifier","name":"key","range":[35,38]},"computed":true,"range":[31,39]}],"range":[0,40]}',
  tokens: '[{"type":{"label":"name"},"value":"assert","range":[0,6]},{"type":{"label":"."},"range":[6,7]},{"type":{"label":"name"},"value":"deepEqual","range":[7,16]},{"type":{"label":"("},"range":[16,17]},{"type":{"label":"name"},"value":"foo","range":[17,20]},{"type":{"label":"."},"range":[20,21]},{"type":{"label":"name"},"value":"propName","range":[21,29]},{"type":{"label":","},"range":[29,30]},{"type":{"label":"name"},"value":"foo","range":[31,34]},{"type":{"label":"["},"range":[34,35]},{"type":{"label":"name"},"value":"key","range":[35,38]},{"type":{"label":"]"},"range":[38,39]},{"type":{"label":")"},"range":[39,40]}]',
  visitorKeys: _powerAssertVisitorKeys
}));
