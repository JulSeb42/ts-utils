export const calculateTotalSum = (arr: number[]) => {
    return arr.map(item => item).reduce((partialSum, a) => partialSum + a, 0)
}
