/*=============================================== Calculate total sum from array ===============================================*/

export function calculateTotalSum(arr: number[]): number {
    return arr.map(item => item).reduce((partialSum, a) => partialSum + a, 0)
}
