"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailRegex = exports.passwordRegex = void 0;
const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
exports.passwordRegex = passwordRegex;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
exports.emailRegex = emailRegex;
