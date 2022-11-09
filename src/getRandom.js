"use strict";
exports.__esModule = true;
exports.getRandom = void 0;
var getRandom = function (arr) {
    var randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
};
exports.getRandom = getRandom;
