/**
 * @description Generate an array of numbers within a specified range with optional step increment.
 * This function creates a sequence of numbers from min to max (inclusive) with customizable step size.
 *
 * @param {number} [min=0] - The starting number (inclusive, defaults to 0)
 * @param {number} [max=100] - The ending number (inclusive, defaults to 100)
 * @param {number} [step=1] - The increment step (defaults to 1)
 *
 * @returns {number[]} An array of numbers from min to max with the specified step
 *
 * @example
 * // Generate basic range
 * generateNumbers(0, 4) // Returns [0, 1, 2, 3, 4]
 *
 * @example
 * // Generate with custom step
 * generateNumbers(0, 10, 2) // Returns [0, 2, 4, 6, 8, 10]
 *
 * @example
 * // Generate with default parameters
 * generateNumbers() // Returns [0, 1, 2, ..., 100]
 *
 * @example
 * // Generate negative range
 * generateNumbers(-5, 5, 1) // Returns [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
 */
export function generateNumbers(
    min: number = 0,
    max: number = 100,
    step: number = 1
): number[] {
    const arr: number[] = []

    for (let i = min; i < max + 1; i += step) {
        arr.push(i)
    }

    return arr
}
