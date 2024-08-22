"use strict";
/*=============================================== To camel case ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCamelCase = toCamelCase;
var to_base_case_1 = require("./to-base-case");
/**
 * @description Transforms a string toCamelCase
 * @param string: string
 * @example toCamelCase("hello world") => helloWorld
 */
function toCamelCase(string) {
    var formattedString = (0, to_base_case_1.toBaseCase)(string);
    return formattedString
        .toLowerCase()
        .replace(new RegExp(/[-_]+/g), " ")
        .replace(new RegExp(/[^\w\s]/g), "")
        .replace(new RegExp(/\s+(.)(\w*)/g), function (_, $2, $3) { return "".concat($2.toUpperCase() + $3); });
}
