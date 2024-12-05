"use strict";
/*=============================================== Get tomorrow ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextDay = void 0;
/**
 * @description Get tomorrow's date in format `yyyy-mm-dd`
 * @example getNextDay(currentDate: string | Date) => 2023-08-22
 */
function getNextDay(currentDate) {
    var today = new Date(currentDate.toString());
    var nextDate = new Date(Number(today) + 3600 * 1000 * 24);
    var dd = nextDate.getDate();
    var mm = nextDate.getMonth() + 1;
    var yy = nextDate.getFullYear();
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (mm < 10) {
        mm = "0" + mm;
    }
    return "".concat(yy, "-").concat(mm, "-").concat(dd);
}
exports.getNextDay = getNextDay;
