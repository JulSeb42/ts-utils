"use strict";
/*=============================================== Convert string to-kebab-case ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.toKebabCase = void 0;
function toKebabCase(string) {
    var _a;
    return (_a = string
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)) === null || _a === void 0 ? void 0 : _a.map(function (x) { return x.toLowerCase(); }).join("-");
}
exports.toKebabCase = toKebabCase;
