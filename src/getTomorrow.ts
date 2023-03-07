export const getTomorrow = () => {
    const tomorrow = new Date(Date.now() + 3600 * 1000 * 24)
    let dd: string | number = tomorrow.getDate()
    let mm: string | number = tomorrow.getMonth()
    let yy: string | number = tomorrow.getFullYear()

    if (dd < 10) {
        dd = "0" + dd
    }

    if (mm < 10) {
        mm = "0" + mm
    }

    return `${yy}-${mm}-${dd}`
}
