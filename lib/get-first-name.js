"use strict";

/*=============================================== Get first name from `John Doe` ===============================================*/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFirstName = void 0;
function getFirstName(fullName) {
  return fullName.split(" ")[0];
}
exports.getFirstName = getFirstName;