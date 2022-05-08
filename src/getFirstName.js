"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getFirstName = (fullName) => {
    let arr = fullName.split(" ");
    return arr[0];
};
exports.default = getFirstName;
