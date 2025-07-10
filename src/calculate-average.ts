/**
 * @description Calculate the average (arithmetic mean) of an array of numbers.
 * This function sums all numbers in the array and divides by the array length.
 * Note: Returns NaN for empty arrays or arrays containing non-numeric values.
 *
 * @param {number[]} array - An array of numbers to calculate the average from
 *
 * @returns {number} The arithmetic mean of the numbers, or NaN if array is empty
 *
 * @example
 * // Calculate average of positive numbers
 * calculateAverage([1, 2, 3, 4]) // Returns 2.5
 *
 * @example
 * // Calculate average with decimals
 * calculateAverage([1.5, 2.5, 3.5]) // Returns 2.5
 *
 * @example
 * // Calculate average with negative numbers
 * calculateAverage([-1, 0, 1, 2]) // Returns 0.5
 *
 * @example
 * // Empty array returns NaN
 * calculateAverage([]) // Returns NaN
 */
export function calculateAverage(array: number[]): number {
    return array.reduce((a, b) => a + b, 0) / array.length
}
