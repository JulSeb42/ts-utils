"use strict";
/*=============================================== Regex tests ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailRegex = exports.passwordRegex = void 0;
var passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
exports.passwordRegex = passwordRegex;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
exports.emailRegex = emailRegex;
