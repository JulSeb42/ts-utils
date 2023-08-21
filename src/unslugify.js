"use strict";
/*=============================================== Unslugify string ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.unslugify = void 0;
var to_sentence_case_1 = require("./to-sentence-case");
function unslugify(str) {
    return (0, to_sentence_case_1.toSentenceCase)(str.replace(/-/g, " ").replace(/_/g, " "));
}
exports.unslugify = unslugify;
