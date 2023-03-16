"use strict";
exports.__esModule = true;
exports.getTimeNow = void 0;
var getTimeNow = function (withSeconds) {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    if (hours < 10) {
        hours = "0".concat(hours);
    }
    if (minutes < 10) {
        minutes = "0".concat(minutes);
    }
    if (seconds < 10) {
        seconds = "0".concat(seconds);
    }
    return "".concat(hours, ":").concat(minutes).concat(withSeconds ? ":".concat(seconds) : "");
};
exports.getTimeNow = getTimeNow;
