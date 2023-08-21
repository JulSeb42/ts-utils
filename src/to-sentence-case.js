"use strict";
/*=============================================== Convert string To sentence case ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSentenceCase = void 0;
function toSentenceCase(string) {
    return (string.toLowerCase().charAt(0).toUpperCase() +
        string.slice(1).toLowerCase());
}
exports.toSentenceCase = toSentenceCase;
