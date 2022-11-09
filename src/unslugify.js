"use strict";
exports.__esModule = true;
exports.unslugify = void 0;
var capitalize_1 = require("./capitalize");
var unslugify = function (str) {
    return (0, capitalize_1.capitalize)(str.replace(/-/g, " ").replace(/_/g, " "));
};
exports.unslugify = unslugify;
