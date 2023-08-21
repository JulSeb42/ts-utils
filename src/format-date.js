"use strict";
/*=============================================== Format date ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
/**
 * @description Format a Date to `yyyy-mm-dd`
 * @example formatDate(new Date("Mon Aug 21 2023 17:01:50 GMT+0100")) => 2023-08-21
 */
function formatDate(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    if (month < 10)
        month = "0".concat(month);
    if (day < 10)
        day = "0".concat(day);
    return "".concat(year, "-").concat(month, "-").concat(day);
}
exports.formatDate = formatDate;
