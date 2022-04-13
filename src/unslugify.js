"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var capitalize_1 = __importDefault(require("./capitalize"));
var unslugify = function (str) {
    return (0, capitalize_1.default)(str.replace(/-/g, " ").replace(/_/g, " "));
};
exports.default = unslugify;
