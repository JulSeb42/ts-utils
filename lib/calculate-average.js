"use strict";

/*=============================================== Calculate average number from array ===============================================*/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateAverage = void 0;
function calculateAverage(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0) / arr.length;
}
exports.calculateAverage = calculateAverage;