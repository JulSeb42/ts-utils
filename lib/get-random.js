"use strict";

/*=============================================== Get a random value from an array ===============================================*/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandom = void 0;
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
exports.getRandom = getRandom;