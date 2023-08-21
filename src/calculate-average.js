"use strict";
/*=============================================== Calculate average ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAverage = void 0;
/**
 * @description Calculate an average number for an array of numbers
 * @example calculateAverage([1, 2, 3, 4])
 */
function calculateAverage(arr) {
    return arr.reduce(function (a, b) { return a + b; }, 0) / arr.length;
}
exports.calculateAverage = calculateAverage;
