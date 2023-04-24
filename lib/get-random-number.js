"use strict";

exports.__esModule = true;
exports.getRandomNumber = void 0;

var getRandomNumber = function (min, max) {
  if (min === void 0) {
    min = 0;
  }

  if (max === void 0) {
    max = 100;
  }

  var getMin = min;
  var getMax = max;
  return Math.floor(Math.random() * (getMax - getMin + 1) + getMin);
};

exports.getRandomNumber = getRandomNumber;