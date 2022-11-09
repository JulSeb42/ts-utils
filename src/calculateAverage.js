"use strict";
exports.__esModule = true;
exports.calculateAverage = void 0;
var calculateAverage = function (arr) {
    return arr.reduce(function (a, b) { return a + b; }, 0) / arr.length;
};
exports.calculateAverage = calculateAverage;
