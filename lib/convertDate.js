"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var convertDate = function (date) {
  if (date) {
    var newDate = date.split("-");
    var day = newDate[2];
    var month = newDate[1];
    var year = newDate[0];
    var convertedMonth = month === "01" ? "January" : month === "02" ? "February" : month === "03" ? "March" : month === "04" ? "April" : month === "05" ? "May" : month === "06" ? "June" : month === "07" ? "July" : month === "08" ? "August" : month === "09" ? "September" : month === "10" ? "October" : month === "11" ? "November" : month === "12" ? "December" : "Error in date";
    return "".concat(day, " ").concat(convertedMonth, " ").concat(year);
  } else {
    return "12 December 2021";
  }
};

exports.default = convertDate;