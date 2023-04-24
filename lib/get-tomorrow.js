"use strict";

exports.__esModule = true;
exports.getTomorrow = void 0;

var getTomorrow = function () {
  var tomorrow = new Date(Date.now() + 3600 * 1000 * 24);
  var dd = tomorrow.getDate();
  var mm = tomorrow.getMonth();
  var yy = tomorrow.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  return "".concat(yy, "-").concat(mm, "-").concat(dd);
};

exports.getTomorrow = getTomorrow;