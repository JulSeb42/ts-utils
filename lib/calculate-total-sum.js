"use strict";

exports.__esModule = true;
exports.calculateTotalSum = void 0;

var calculateTotalSum = function (arr) {
  return arr.map(function (item) {
    return item;
  }).reduce(function (partialSum, a) {
    return partialSum + a;
  }, 0);
};

exports.calculateTotalSum = calculateTotalSum;