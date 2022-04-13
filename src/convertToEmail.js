"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var slugify_1 = __importDefault(require("./slugify"));
var convertToEmail = function (name, domain) {
    return "".concat((0, slugify_1.default)(name).replace(/-/g, ".").replace(/ /g, "."), "@").concat(domain || "email.com");
};
exports.default = convertToEmail;
