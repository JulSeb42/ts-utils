"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const convertYoutube = str => {
  return str.replace("watch?v=", "embed/");
};

exports.default = convertYoutube;