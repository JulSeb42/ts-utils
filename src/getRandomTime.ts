const getRandomTime = (min: number, max: number) => {
    let hour: number | string = Math.floor(Math.random() * (max - min)) + min
    let minutes: number | string = Math.floor(Math.random() * (59 - 0) + 0)

    if (hour < 10) {
        hour = `0${hour}`
    }

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    return `${hour}:${minutes}`
}

export default getRandomTime
