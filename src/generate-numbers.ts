/*=============================================== Generate array of numbers ===============================================*/

export function generateNumbers(min = 0, max = 100, step?: number): number[] {
    const arr: number[] = []

    for (let i = min; i < max + 1; i += step || 1) {
        arr.push(i)
    }

    return arr
}
