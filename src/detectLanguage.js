"use strict";
exports.__esModule = true;
exports.detectLanguage = void 0;
var detectLanguage = function () {
    if (localStorage.getItem("language") !== null) {
        return localStorage.getItem("language");
    }
    else if (localStorage.getItem("lang") !== null) {
        return localStorage.getItem("lang");
    }
    else {
        return navigator.language;
    }
};
exports.detectLanguage = detectLanguage;
