module.exports = {
  ArrayFrom: Array.from,
  ArrayIsArray: Array.isArray,
  ArrayPrototypeShift: (obj) => Array.prototype.shift.call(obj),
  ArrayPrototypeForEach: (arr, ...rest) => Array.prototype.forEach.apply(arr, rest),
  ArrayPrototypeIncludes: (arr, ...rest) => Array.prototype.includes.apply(arr, rest),
  ArrayPrototypeJoin: (arr, ...rest) => Array.prototype.join.apply(arr, rest),
  ArrayPrototypePop: (arr, ...rest) => Array.prototype.pop.apply(arr, rest),
  ArrayPrototypePush: (arr, ...rest) => Array.prototype.push.apply(arr, rest),
  FunctionPrototype: Function.prototype,
  JSONParse: JSON.parse,
  JSONStringify: JSON.stringify,
  ObjectFreeze: Object.freeze,
  ObjectKeys: Object.keys,
  ObjectGetOwnPropertyNames: Object.getOwnPropertyNames,
  ObjectDefineProperty: Object.defineProperty,
  ObjectPrototypeHasOwnProperty: (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop),
  RegExpPrototypeExec: (obj, string) => RegExp.prototype.exec.call(obj, string),
  RegExpPrototypeTest: (obj, string) => RegExp.prototype.test.call(obj, string),
  RegExpPrototypeSymbolReplace: (obj, ...rest) => RegExp.prototype[Symbol.replace].apply(obj, rest),
  SafeMap: Map,
  SafeSet: Set,
  StringPrototypeEndsWith: (str, ...rest) => String.prototype.endsWith.apply(str, rest),
  StringPrototypeIncludes: (str, ...rest) => String.prototype.includes.apply(str, rest),
  StringPrototypeLastIndexOf: (str, ...rest) => String.prototype.lastIndexOf.apply(str, rest),
  StringPrototypeIndexOf: (str, ...rest) => String.prototype.indexOf.apply(str, rest),
  StringPrototypeRepeat: (str, ...rest) => String.prototype.repeat.apply(str, rest),
  StringPrototypeReplace: (str, ...rest) => String.prototype.replace.apply(str, rest),
  StringPrototypeSlice: (str, ...rest) => String.prototype.slice.apply(str, rest),
  StringPrototypeSplit: (str, ...rest) => String.prototype.split.apply(str, rest),
  StringPrototypeStartsWith: (str, ...rest) => String.prototype.startsWith.apply(str, rest),
  StringPrototypeSubstr: (str, ...rest) => String.prototype.substr.apply(str, rest),
  SyntaxError: SyntaxError
};
