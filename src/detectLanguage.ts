export const detectLanguage = () => {
    if (localStorage.getItem("language") !== null) {
        return localStorage.getItem("language")
    } else if (localStorage.getItem("lang") !== null) {
        return localStorage.getItem("lang")
    } else {
        return navigator.language
    }
}
