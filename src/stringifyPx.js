"use strict";
exports.__esModule = true;
exports.stringifyPx = void 0;
var stringifyPx = function (number) {
    if (typeof number === "string") {
        return number;
    }
    else {
        return "".concat(number, "px");
    }
};
exports.stringifyPx = stringifyPx;
