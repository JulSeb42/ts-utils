export const getRandomTime = (min = 0, max = 23, withSeconds?: boolean) => {
    const getMin = min
    const getMax = max
    let hour: number | string =
        Math.floor(Math.random() * (getMax - getMin)) + getMin
    let minutes: number | string = Math.floor(Math.random() * (59 - 0) + 0)
    let seconds: number | string = Math.floor(Math.random() * (59 - 0) + 0)

    if (hour < 10) {
        hour = `0${hour}`
    }

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    return `${hour}:${minutes}${withSeconds ? `:${seconds}` : ""}`
}
