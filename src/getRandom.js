"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRandom = (arr) => {
    const randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
};
exports.default = getRandom;
