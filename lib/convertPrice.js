"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var convertPrice = function (num, currency) {
  var formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currency || "EUR"
  });
  return formatter.format(num);
};

exports.default = convertPrice;