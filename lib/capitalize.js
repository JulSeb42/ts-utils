"use strict";

/*=============================================== Capitalize ===============================================*/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalize = void 0;
/**
 * @description Capitalize a string
 * @example capitalize("hello world") => Hello world
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.capitalize = capitalize;