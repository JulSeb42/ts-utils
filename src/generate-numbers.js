"use strict";
/*=============================================== Generate array of numbers ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNumbers = void 0;
function generateNumbers(min, max, step) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    var arr = [];
    for (var i = min; i < max + 1; i += step || 1) {
        arr.push(i);
    }
    return arr;
}
exports.generateNumbers = generateNumbers;
