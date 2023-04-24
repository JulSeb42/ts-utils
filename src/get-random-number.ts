export const getRandomNumber = (min = 0, max = 100) => {
    const getMin = min
    const getMax = max
    return Math.floor(Math.random() * (getMax - getMin + 1) + getMin)
}
