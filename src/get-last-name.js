"use strict";
/*=============================================== Get last name from `John Doe` ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastName = void 0;
function getLastName(str) {
    var split = str.split(" ");
    return split[split.length - 1];
}
exports.getLastName = getLastName;
