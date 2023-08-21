"use strict";

/*=============================================== Get last name ===============================================*/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLastName = void 0;
/**
 * @description Get last name of a full name
 * @example getLastName("John Doe") => Doe
 */
function getLastName(str) {
  var split = str.split(" ");
  return split[split.length - 1];
}
exports.getLastName = getLastName;