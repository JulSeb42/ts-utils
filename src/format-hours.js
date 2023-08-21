"use strict";
/*=============================================== Format hour from `3.5` to `03:30` ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatHour = void 0;
function formatHour(hour) {
    return "".concat(hour < 10 ? "0" : "").concat(Math.floor(hour), ":").concat(hour % 1 !== 0 ? 3 : 0, "0");
}
exports.formatHour = formatHour;
