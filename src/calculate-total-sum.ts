/*=============================================== Calculate total sum ===============================================*/

/**
 * @description Calculate the total sum of an array
 * @param arr: number[]
 * @example calculateTotalSum([1, 2, 3, 4]) => 10
 */

export function calculateTotalSum(arr: number[]): number {
    return arr.map(item => item).reduce((partialSum, a) => partialSum + a, 0)
}
