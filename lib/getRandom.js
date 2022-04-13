"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var getRandom = function (arr) {
  var randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};

exports.default = getRandom;