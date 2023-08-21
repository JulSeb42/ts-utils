"use strict";
/*=============================================== To camel case ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCamelCase = void 0;
/**
 * @description Transforms a string to camel case
 * @example toCamelCase("hello world") => helloWorld
 */
function toCamelCase(string) {
    return string
        .toLowerCase()
        .replace(new RegExp(/[-_]+/g), " ")
        .replace(new RegExp(/[^\w\s]/g), "")
        .replace(new RegExp(/\s+(.)(\w*)/g), function (_, $2, $3) { return "".concat($2.toUpperCase() + $3); });
}
exports.toCamelCase = toCamelCase;
