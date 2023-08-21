"use strict";
/*=============================================== Format date to `yyyy-mm-dd` ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
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
