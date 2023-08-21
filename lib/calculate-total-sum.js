"use strict";

/*=============================================== Calculate total sum from array ===============================================*/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateTotalSum = void 0;
function calculateTotalSum(arr) {
  return arr.map(function (item) {
    return item;
  }).reduce(function (partialSum, a) {
    return partialSum + a;
  }, 0);
}
exports.calculateTotalSum = calculateTotalSum;