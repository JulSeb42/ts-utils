/**
 * @description Generate a pseudo-random unique identifier.
 * This function creates a simple numeric ID based on current timestamp and random number.
 * Note: This is not a true UUID and may not guarantee uniqueness in high-concurrency scenarios.
 *
 * @returns {string} A pseudo-random identifier as a string
 *
 * @example
 * // Generate a unique ID
 * uuid() // Returns "1684234567890" (timestamp-based)
 *
 * @example
 * // Generate multiple IDs
 * const id1 = uuid() // Returns "1684234567890"
 * const id2 = uuid() // Returns "1684234567891"
 */
export function uuid(): string {
    return Math.floor(Math.random() * Date.now()).toString()
}
