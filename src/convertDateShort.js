"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var convertDateShort = function (date) {
    if (date) {
        var newDate = date.split("-");
        var day = newDate[2];
        var month = newDate[1];
        var year = newDate[0];
        var convertedMonth = month === "01"
            ? "Jan"
            : month === "02"
                ? "Feb"
                : month === "03"
                    ? "Mar"
                    : month === "04"
                        ? "Apr"
                        : month === "05"
                            ? "May"
                            : month === "06"
                                ? "Jun"
                                : month === "07"
                                    ? "Jul"
                                    : month === "08"
                                        ? "Aug"
                                        : month === "09"
                                            ? "Sep"
                                            : month === "10"
                                                ? "Oct"
                                                : month === "11"
                                                    ? "Nov"
                                                    : month === "12"
                                                        ? "Dec"
                                                        : "Error in date";
        return "".concat(day, " ").concat(convertedMonth, " ").concat(year);
    }
    else {
        return "12 December 2021";
    }
};
exports.default = convertDateShort;
