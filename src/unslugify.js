"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const capitalize_1 = __importDefault(require("./capitalize"));
const unslugify = (str) => {
    return (0, capitalize_1.default)(str.replace(/-/g, " ").replace(/_/g, " "));
};
exports.default = unslugify;
