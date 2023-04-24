"use strict";

exports.__esModule = true;
exports.getRandomTime = void 0;

var getRandomTime = function (min, max, withSeconds) {
  if (min === void 0) {
    min = 0;
  }

  if (max === void 0) {
    max = 23;
  }

  var getMin = min;
  var getMax = max;
  var hour = Math.floor(Math.random() * (getMax - getMin)) + getMin;
  var minutes = Math.floor(Math.random() * (59 - 0) + 0);
  var seconds = Math.floor(Math.random() * (59 - 0) + 0);

  if (hour < 10) {
    hour = "0".concat(hour);
  }

  if (minutes < 10) {
    minutes = "0".concat(minutes);
  }

  if (seconds < 10) {
    seconds = "0".concat(seconds);
  }

  return "".concat(hour, ":").concat(minutes).concat(withSeconds ? ":".concat(seconds) : "");
};

exports.getRandomTime = getRandomTime;