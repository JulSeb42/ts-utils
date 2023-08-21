"use strict";
/*=============================================== To pascal case ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPascalCase = void 0;
/**
 * @description Transforms a string to pascal case
 * @example toPascalCase("hello world") => HelloWorld
 */
function toPascalCase(string) {
    return string
        .toLowerCase()
        .replace(new RegExp(/[-_]+/g), " ")
        .replace(new RegExp(/[^\w\s]/g), "")
        .replace(new RegExp(/\s+(.)(\w*)/g), function (_, $2, $3) { return "".concat($2.toUpperCase() + $3); })
        .replace(new RegExp(/\w/), function (s) { return s.toUpperCase(); });
}
exports.toPascalCase = toPascalCase;
