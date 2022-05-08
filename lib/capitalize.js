"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

exports.default = capitalize;