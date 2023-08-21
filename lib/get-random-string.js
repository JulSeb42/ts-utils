"use strict";

/*=============================================== Get a random string ===============================================*/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomString = void 0;
function getRandomString(length) {
  if (length === void 0) {
    length = 20;
  }
  var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var result = "";
  for (var i = 0; i < length; i++) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}
exports.getRandomString = getRandomString;