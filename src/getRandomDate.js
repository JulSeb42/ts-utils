"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getRandomDate = function (minYear, maxYear) {
    var day = Math.floor(Math.random() * (30 - 1)) + 1;
    var month = Math.floor(Math.random() * (12 - 1)) + 1;
    var year = Math.floor(Math.random() * (maxYear - minYear + 1) + minYear);
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    if (month === "02") {
        day = Math.floor(Math.random() * (28 - 1)) + 1;
    }
    return "".concat(year, "-").concat(month, "-").concat(day);
};
exports.default = getRandomDate;
