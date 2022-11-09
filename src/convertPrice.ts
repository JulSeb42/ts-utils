export const convertPrice = (num: number, currency?: string) => {
    const formatter = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currency || "EUR",
    })

    return formatter.format(num)
}
