"use strict";
exports.__esModule = true;
exports.uuid = void 0;
var uuid = function () {
    return (String(1e7) + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (Number(c) ^
            (crypto.getRandomValues(new Uint8Array(1))[0] &
                (15 >> (Number(c) / 4)))).toString(16);
    });
};
exports.uuid = uuid;
