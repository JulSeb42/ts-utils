"use strict";

/*=============================================== To constant case ===============================================*/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toConstantCase = void 0;
/**
 * @description Transforms a string to constant case
 * @example toConstantCase("hello world") => HELLO_WORLD
 */
function toConstantCase(string) {
  var _a;
  return (_a = string.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)) === null || _a === void 0 ? void 0 : _a.map(function (x) {
    return x.toLowerCase();
  }).join("_").toUpperCase();
}
exports.toConstantCase = toConstantCase;