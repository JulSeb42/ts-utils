"use strict";
/*=============================================== To dot case ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDotCase = void 0;
/**
 * @description Transforms a string to dot case
 * @example toDotCase("hello world") => hello.world
 */
function toDotCase(string) {
    var _a;
    return (_a = string
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)) === null || _a === void 0 ? void 0 : _a.map(function (x) { return x.toLowerCase(); }).join(".");
}
exports.toDotCase = toDotCase;
