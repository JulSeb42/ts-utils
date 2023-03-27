"use strict";

exports.__esModule = true;
exports.disableScroll = void 0;

var disableScroll = function () {
  return document.body.classList.add("stop-scrolling");
};

exports.disableScroll = disableScroll;