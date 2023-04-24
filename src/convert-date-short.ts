export const convertDateShort = (date: Date) => {
    const formatDate = (year: number, month: number, day: number) =>
        `${year}-${month < 10 ? 0 : ""}${month}-${day}`

    const formated = formatDate(
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    )

    const splitted = formated.split("-")

    const day = splitted[2]
    let month = splitted[1]
    const year = splitted[0]

    let convertedMonth =
        month === "01"
            ? "Jan"
            : month === "02"
            ? "Feb"
            : month === "03"
            ? "Mar"
            : month === "04"
            ? "Apr"
            : month === "05"
            ? "May"
            : month === "06"
            ? "Jun"
            : month === "07"
            ? "Jul"
            : month === "08"
            ? "Aug"
            : month === "09"
            ? "Sep"
            : month === "10"
            ? "Oct"
            : month === "11"
            ? "Nov"
            : month === "12"
            ? "Dec"
            : "Error in date"

    return `${day} ${convertedMonth} ${year}`
}