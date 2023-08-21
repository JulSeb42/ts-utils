"use strict";
/*=============================================== Transform a value to `(value)px` ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyPx = void 0;
function stringifyPx(number) {
    if (typeof number === "string") {
        return number;
    }
    else {
        return "".concat(number, "px");
    }
}
exports.stringifyPx = stringifyPx;
