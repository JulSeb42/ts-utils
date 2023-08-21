/*=============================================== Calculate average ===============================================*/

/**
 * @description Calculate an average number for an array of numbers
 * @example calculateAverage([1, 2, 3, 4])
 */

export function calculateAverage(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0) / arr.length
}
