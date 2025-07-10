/**
 * @description Get a random element from an array.
 * This function selects and returns a random item from the provided array.
 *
 * @template T - The type of array elements
 * @param {T[]} array - The array to select a random element from
 *
 * @returns {T} A random element from the array
 *
 * @example
 * // Get random number from array
 * getRandom([1, 2, 3, 4]) // Returns 3 (example)
 *
 * @example
 * // Get random string from array
 * getRandom(["apple", "banana", "cherry"]) // Returns "banana" (example)
 *
 * @example
 * // Get random object from array
 * getRandom([{id: 1}, {id: 2}, {id: 3}]) // Returns {id: 2} (example)
 *
 * @example
 * // Use with single element array
 * getRandom(["only"]) // Returns "only"
 */
export function getRandom<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)]
}
