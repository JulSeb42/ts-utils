"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stringifyPx = (number) => {
    if (typeof number === "string") {
        return number;
    }
    else {
        return `${number}px`;
    }
};
exports.default = stringifyPx;
