/*=============================================== Get random number ===============================================*/

/**
 * @description Get random number between set values
 * @example getRandomNumber(18, 56) => 42
 */

export function getRandomNumber(min = 0, max = 100): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
