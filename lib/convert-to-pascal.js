"use strict";

exports.__esModule = true;
exports.convertToPascal = void 0;

var convertToPascal = function (str) {
  return "".concat(str).toLowerCase().replace(new RegExp(/[-_]+/, "g"), " ").replace(new RegExp(/[^\w\s]/, "g"), "").replace(new RegExp(/\s+(.)(\w*)/, "g"), function ($1, $2, $3) {
    return "".concat($2.toUpperCase() + $3);
  }).replace(new RegExp(/\w/), function (s) {
    return s.toUpperCase();
  });
};

exports.convertToPascal = convertToPascal;