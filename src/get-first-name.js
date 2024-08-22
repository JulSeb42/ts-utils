"use strict";
/*=============================================== Get first name ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirstName = getFirstName;
/**
 * @description Get first name of a full name
 * @param fullName: string
 * @example getFirstName("John Doe") => John
 */
function getFirstName(fullName) {
    return fullName.split(" ")[0];
}
