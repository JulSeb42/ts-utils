"use strict";
/*=============================================== Convert string to email ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToEmail = void 0;
var slugify_1 = require("./slugify");
function convertToEmail(name, domain) {
    if (domain === void 0) { domain = "email.com"; }
    return "".concat((0, slugify_1.slugify)(name).replace(/-/g, ".").replace(/ /g, "."), "@").concat(domain);
}
exports.convertToEmail = convertToEmail;
