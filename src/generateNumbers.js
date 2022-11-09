"use strict";
exports.__esModule = true;
exports.generateNumbers = void 0;
var generateNumbers = function (min, max, step) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    var arr = [];
    for (var i = min; i < max; i += step || 1) {
        arr.push(i);
    }
    return arr;
};
exports.generateNumbers = generateNumbers;
