"use strict";

exports.__esModule = true;
exports.convertDateShort = void 0;

var convertDateShort = function (date) {
  var formatDate = function (year, month, day) {
    return "".concat(year, "-").concat(month < 10 ? 0 : "").concat(month, "-").concat(day);
  };

  var formated = formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
  var splitted = formated.split("-");
  var day = splitted[2];
  var month = splitted[1];
  var year = splitted[0];
  var convertedMonth = month === "01" ? "Jan" : month === "02" ? "Feb" : month === "03" ? "Mar" : month === "04" ? "Apr" : month === "05" ? "May" : month === "06" ? "Jun" : month === "07" ? "Jul" : month === "08" ? "Aug" : month === "09" ? "Sep" : month === "10" ? "Oct" : month === "11" ? "Nov" : month === "12" ? "Dec" : "Error in date";
  return "".concat(day, " ").concat(convertedMonth, " ").concat(year);
};

exports.convertDateShort = convertDateShort;