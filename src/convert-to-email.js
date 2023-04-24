"use strict";
exports.__esModule = true;
exports.convertToEmail = void 0;
var slugify_1 = require("./slugify");
var convertToEmail = function (name, domain) {
    return "".concat((0, slugify_1.slugify)(name).replace(/-/g, ".").replace(/ /g, "."), "@").concat(domain || "email.com");
};
exports.convertToEmail = convertToEmail;
