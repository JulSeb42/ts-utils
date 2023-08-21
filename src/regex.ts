/*=============================================== Regex tests ===============================================*/

const passwordRegex: RegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/

const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export { passwordRegex, emailRegex }
