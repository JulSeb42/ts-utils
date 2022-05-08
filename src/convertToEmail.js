"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const slugify_1 = __importDefault(require("./slugify"));
const convertToEmail = (name, domain) => {
    return `${(0, slugify_1.default)(name).replace(/-/g, ".").replace(/ /g, ".")}@${domain || "email.com"}`;
};
exports.default = convertToEmail;
