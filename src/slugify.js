"use strict";
/*=============================================== Slugify ===============================================*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = void 0;
/**
 * @description Slugify string
 * @example slugify("Hello World") => hello-world
 */
function slugify(str) {
    str = str.replace(/^\s+|\s+$/g, "");
    str = str.toLowerCase();
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }
    str = str
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
    return str;
}
exports.slugify = slugify;
