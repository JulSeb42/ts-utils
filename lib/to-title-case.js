"use strict";

/*=============================================== To title case ===============================================*/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toTitleCase = void 0;
/**
 * @description Transforms a string to title case
 * @example toTitleCase("hello world") => Hello World
 */
function toTitleCase(string) {
  var arr = string.toLowerCase().split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}
exports.toTitleCase = toTitleCase;