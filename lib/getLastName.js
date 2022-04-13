"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var getLastName = function (str) {
  var split = str.split(" ");
  return split[split.length - 1];
};

exports.default = getLastName;