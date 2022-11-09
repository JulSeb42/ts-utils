export const getRandomTime = (min = 0, max = 23) => {
    const getMin = min
    const getMax = max
    let hour: number | string =
        Math.floor(Math.random() * (getMax - getMin)) + getMin
    let minutes: number | string = Math.floor(Math.random() * (59 - 0) + 0)

    if (hour < 10) {
        hour = `0${hour}`
    }

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    return `${hour}:${minutes}`
}
