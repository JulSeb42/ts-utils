/*=============================================== Get random string ===============================================*/

/**
 * @description Get a random string
 * @param length?: number
 * @default length: 20
 * @example getRandomString() => MHFTIzosZmtqHokDtJJA
 */

export function getRandomString(length = 20): string {
    const randomChars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let result = ""

    for (let i = 0; i < length; i++) {
        result += randomChars.charAt(
            Math.floor(Math.random() * randomChars.length)
        )
    }

    return result
}
