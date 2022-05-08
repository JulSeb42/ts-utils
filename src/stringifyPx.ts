const stringifyPx = (number: number | string) => {
    if (typeof number === "string") {
        return number
    } else {
        return `${number}px`
    }
}

export default stringifyPx
