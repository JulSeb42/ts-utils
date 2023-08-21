/*=============================================== Get random ===============================================*/

/**
 * @description Get a random value from an array
 * @example getRandom([1, 2, 3, 4]) => 3
 */

export function getRandom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)]
}
