"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var convertYoutube = function (str) {
  return str.replace("watch?v=", "embed/");
};

exports.default = convertYoutube;