/*=============================================== Generate numbers ===============================================*/

/**
 * @description Generates an array of numbers
 * @example generateNumbers(0, 4) => [0, 1, 2, 3, 4]
 */

export function generateNumbers(min = 0, max = 100, step?: number): number[] {
    const arr: number[] = []

    for (let i = min; i < max + 1; i += step || 1) {
        arr.push(i)
    }

    return arr
}
