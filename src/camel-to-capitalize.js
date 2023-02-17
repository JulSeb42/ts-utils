"use strict";
exports.__esModule = true;
exports.camelToCapitalize = void 0;
var camelToCapitalize = function (str) {
    return str.replace(/([A-Z])/g, " $1").replace(/^./, function (string) {
        return string.toUpperCase();
    });
};
exports.camelToCapitalize = camelToCapitalize;
