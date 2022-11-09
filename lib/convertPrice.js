"use strict";

exports.__esModule = true;
exports.convertPrice = void 0;

var convertPrice = function (num, currency) {
  var formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currency || "EUR"
  });
  return formatter.format(num);
};

exports.convertPrice = convertPrice;