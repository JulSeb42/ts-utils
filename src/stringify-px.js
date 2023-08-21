"use strict";
/*=============================================== Stringify px ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyPx = void 0;
/**
 * @description Transform a value to `{value}px`
 * @example stringifyPx(123) => 123px
 */
function stringifyPx(number) {
    if (typeof number === "string") {
        return number;
    }
    else {
        return "".concat(number, "px");
    }
}
exports.stringifyPx = stringifyPx;
