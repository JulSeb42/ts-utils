"use strict";

exports.__esModule = true;
exports.convertYoutube = void 0;

var convertYoutube = function (str) {
  return str.replace("watch?v=", "embed/");
};

exports.convertYoutube = convertYoutube;