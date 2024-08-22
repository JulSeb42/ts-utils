"use strict";
/*=============================================== To constant case ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.toConstantCase = toConstantCase;
var to_base_case_1 = require("./to-base-case");
/**
 * @description Transforms a string TO_CONSTANT_CASE
 * @param string: string
 * @example toConstantCase("hello world") => HELLO_WORLD
 */
function toConstantCase(string) {
    var _a;
    var formattedString = (0, to_base_case_1.toBaseCase)(string);
    return (_a = formattedString
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)) === null || _a === void 0 ? void 0 : _a.map(function (x) { return x.toLowerCase(); }).join("_").toUpperCase();
}
