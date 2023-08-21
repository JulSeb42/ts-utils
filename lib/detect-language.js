"use strict";

/*=============================================== Detect lang value in local storage ===============================================*/
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectLanguage = void 0;
function detectLanguage() {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("language") !== null) {
      return localStorage.getItem("language");
    } else if (localStorage.getItem("lang") !== null) {
      return localStorage.getItem("lang");
    } else {
      return navigator.language;
    }
  }
}
exports.detectLanguage = detectLanguage;