"use strict";
exports.__esModule = true;
exports.getTimeNow = void 0;
var getTimeNow = function () {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    if (hours < 10) {
        hours = "0".concat(hours);
    }
    if (minutes < 10) {
        minutes = "0".concat(minutes);
    }
    return "".concat(hours, ":").concat(minutes);
};
exports.getTimeNow = getTimeNow;
