/**
 * @description Calculate the percentage that a partial value represents of a total value.
 * This function computes what percentage the partial amount is of the total amount.
 *
 * @param {number} partial - The partial value (numerator)
 * @param {number} total - The total value (denominator)
 *
 * @returns {number} The percentage as a number (not rounded)
 *
 * @example
 * // Calculate percentage
 * getPercentage(200, 500) // Returns 40
 *
 * @example
 * // Calculate with decimals
 * getPercentage(25, 80) // Returns 31.25
 *
 * @example
 * // Calculate percentage greater than 100%
 * getPercentage(150, 100) // Returns 150
 *
 * @example
 * // Calculate with zero total (returns Infinity)
 * getPercentage(50, 0) // Returns Infinity
 */
export function getPercentage(partial: number, total: number): number {
    return (100 * partial) / total
}
