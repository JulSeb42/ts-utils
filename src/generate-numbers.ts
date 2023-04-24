export const generateNumbers = (min = 0, max = 100, step?: number) => {
    const arr: number[] = []

    for (let i = min; i < max; i += step || 1) {
        arr.push(i)
    }

    return arr
}
