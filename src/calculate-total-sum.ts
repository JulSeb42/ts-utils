/**
 * @description Calculate the total sum of all numbers in an array.
 * This function adds up all numeric values in the provided array.
 * Note: Returns 0 for empty arrays.
 *
 * @param {number[]} array - An array of numbers to sum
 *
 * @returns {number} The total sum of all numbers in the array
 *
 * @example
 * // Calculate sum of positive numbers
 * calculateTotalSum([1, 2, 3, 4]) // Returns 10
 *
 * @example
 * // Calculate sum with decimals
 * calculateTotalSum([1.5, 2.5, 3.0]) // Returns 7
 *
 * @example
 * // Calculate sum with negative numbers
 * calculateTotalSum([-1, -2, 3, 4]) // Returns 4
 *
 * @example
 * // Empty array returns 0
 * calculateTotalSum([]) // Returns 0
 */
export function calculateTotalSum(array: number[]): number {
    return array.map(item => item).reduce((partialSum, a) => partialSum + a, 0)
}
