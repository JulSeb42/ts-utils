"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const getLastName = str => {
  const split = str.split(" ");
  return split[split.length - 1];
};

exports.default = getLastName;