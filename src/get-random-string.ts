/**
 * @description Generate a random string of specified length using alphanumeric characters.
 * This function creates a random string using uppercase, lowercase letters, and optionally numbers.
 *
 * @param {number} [length=20] - The length of the random string to generate (defaults to 20)
 * @param {boolean} [noNumbers] - Whether to exclude numbers from the character set
 *
 * @returns {string} A random string of the specified length
 *
 * @example
 * // Generate default random string
 * getRandomString() // Returns 20-character string like "MHFTIzosZmtqHokDtJJA"
 *
 * @example
 * // Generate custom length
 * getRandomString(8) // Returns 8-character string like "aB3xY9Kl"
 *
 * @example
 * // Generate without numbers
 * getRandomString(10, true) // Returns 10-character string like "AbCdEfGhIj"
 *
 * @example
 * // Generate short string
 * getRandomString(4) // Returns 4-character string like "X7mP"
 */
export function getRandomString(length = 20, noNumbers?: boolean): string {
    const randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"

    const fullString = noNumbers ? randomChars : `${randomChars}${numbers}`

    let result = ""

    for (let i = 0; i < length; i++) {
        result += fullString.charAt(
            Math.floor(Math.random() * fullString.length)
        )
    }

    return result
}
