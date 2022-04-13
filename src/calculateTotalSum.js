"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculateTotalSum = function (arr) {
    return arr.map(function (item) { return item; }).reduce(function (partialSum, a) { return partialSum + a; }, 0);
};
exports.default = calculateTotalSum;
