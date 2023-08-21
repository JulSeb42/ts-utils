"use strict";
/*=============================================== Format hour ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatHour = void 0;
/**
 * @description Format hour with half times
 * @example formatHour(3.5) => 03:30
 */
function formatHour(hour) {
    return "".concat(hour < 10 ? "0" : "").concat(Math.floor(hour), ":").concat(hour % 1 !== 0 ? 3 : 0, "0");
}
exports.formatHour = formatHour;
