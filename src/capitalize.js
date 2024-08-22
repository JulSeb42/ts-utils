"use strict";
/*=============================================== Capitalize ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = capitalize;
/**
 * @description Capitalize a string
 * @param string: string
 * @example capitalize("hello world") => Hello world
 */
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
