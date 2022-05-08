"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convertPrice = (num, currency) => {
    const formatter = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currency || "EUR",
    });
    return formatter.format(num);
};
exports.default = convertPrice;
