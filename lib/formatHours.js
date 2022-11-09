"use strict";

exports.__esModule = true;
exports.formatHour = void 0;

var formatHour = function (hour) {
  return "".concat(hour < 10 ? "0" : "").concat(Math.floor(hour), ":").concat(hour % 1 !== 0 ? 3 : 0, "0");
};

exports.formatHour = formatHour;