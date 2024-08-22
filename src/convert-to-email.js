"use strict";
/*=============================================== Convert to email ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToEmail = convertToEmail;
var slugify_1 = require("./slugify");
/**
 * @description Converts a string to an email address
 * @param name: string
 * @param domain?: string
 * @example convertToEmail("Foo Baz") => foo.baz@email.com
 */
function convertToEmail(name, domain) {
    if (domain === void 0) { domain = "email.com"; }
    return "".concat((0, slugify_1.slugify)(name).replace(/-/g, ".").replace(/ /g, "."), "@").concat(domain);
}
