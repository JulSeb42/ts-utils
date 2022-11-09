export const getToday = () => {
    let today = new Date()
    let dd: number | string = today.getDate()
    let mm: number | string = today.getMonth() + 1
    let yy = today.getFullYear()

    if (dd < 10) {
        dd = "0" + dd
    }

    if (mm < 10) {
        mm = "0" + mm
    }

    return `${yy}-${mm}-${dd}`
}
