/**
 * @description Generate a random integer within a specified range (inclusive).
 * This function returns a random number between min and max values, including both endpoints.
 *
 * @param {number} [min=0] - The minimum value (inclusive, defaults to 0)
 * @param {number} [max=100] - The maximum value (inclusive, defaults to 100)
 *
 * @returns {number} A random integer between min and max (inclusive)
 *
 * @example
 * // Generate random number in custom range
 * getRandomNumber(18, 56) // Returns random number between 18 and 56
 *
 * @example
 * // Generate with default range
 * getRandomNumber() // Returns random number between 0 and 100
 *
 * @example
 * // Generate single digit
 * getRandomNumber(1, 9) // Returns random number between 1 and 9
 *
 * @example
 * // Generate negative range
 * getRandomNumber(-10, 10) // Returns random number between -10 and 10
 */
export function getRandomNumber(min = 0, max = 100): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
