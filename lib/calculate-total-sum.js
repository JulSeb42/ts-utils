"use strict";

/*=============================================== Calculate total sum ===============================================*/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateTotalSum = void 0;
/**
 * @description Calculate the total sum of an array
 * @example calculateTotalSum([1, 2, 3, 4]) => 10
 */
function calculateTotalSum(arr) {
  return arr.map(function (item) {
    return item;
  }).reduce(function (partialSum, a) {
    return partialSum + a;
  }, 0);
}
exports.calculateTotalSum = calculateTotalSum;