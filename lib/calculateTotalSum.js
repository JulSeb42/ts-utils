"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const calculateTotalSum = arr => {
  return arr.map(item => item).reduce((partialSum, a) => partialSum + a, 0);
};

exports.default = calculateTotalSum;