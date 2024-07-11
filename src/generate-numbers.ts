/*=============================================== Generate numbers ===============================================*/

/**
 * @description Generates an array of numbers
 * @param min?: number
 * @param max?: number
 * @param step?: number
 * @default min: 0
 * @default max: 100
 * @default step: 1
 * @example generateNumbers(0, 4) => [0, 1, 2, 3, 4]
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
