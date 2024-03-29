"use strict";
/*=============================================== Convert price to 100,00 € ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertPrice = void 0;
/**
 * @description Convert a price with currency
 * @example convertPrice(100) => 100,00 €
 */
function convertPrice(num, currency) {
    var formatter = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currency || "EUR",
    });
    return formatter.format(num);
}
exports.convertPrice = convertPrice;
