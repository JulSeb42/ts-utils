/*=============================================== Detect lang value in local storage ===============================================*/

export function detectLanguage() {
    if (typeof window !== "undefined") {
        if (localStorage.getItem("language") !== null) {
            return localStorage.getItem("language")
        } else if (localStorage.getItem("lang") !== null) {
            return localStorage.getItem("lang")
        } else {
            return navigator.language
        }
    }
}
