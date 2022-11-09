"use strict";
exports.__esModule = true;
exports.getRandomTime = void 0;
var getRandomTime = function (min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 23; }
    var getMin = min;
    var getMax = max;
    var hour = Math.floor(Math.random() * (getMax - getMin)) + getMin;
    var minutes = Math.floor(Math.random() * (59 - 0) + 0);
    if (hour < 10) {
        hour = "0".concat(hour);
    }
    if (minutes < 10) {
        minutes = "0".concat(minutes);
    }
    return "".concat(hour, ":").concat(minutes);
};
exports.getRandomTime = getRandomTime;
