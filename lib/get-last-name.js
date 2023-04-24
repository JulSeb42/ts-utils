"use strict";

exports.__esModule = true;
exports.getLastName = void 0;

var getLastName = function (str) {
  var split = str.split(" ");
  return split[split.length - 1];
};

exports.getLastName = getLastName;