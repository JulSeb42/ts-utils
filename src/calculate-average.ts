/*=============================================== Calculate average number from array ===============================================*/

export function calculateAverage(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0) / arr.length
}
