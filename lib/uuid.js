"use strict";

exports.__esModule = true;
exports.uuid = void 0;

var uuid = function () {
  return Math.floor(Math.random() * Date.now());
};

exports.uuid = uuid;