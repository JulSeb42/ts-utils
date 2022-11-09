export const convertDate = (date: Date) => {
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
            ? "January"
            : month === "02"
            ? "February"
            : month === "03"
            ? "March"
            : month === "04"
            ? "April"
            : month === "05"
            ? "May"
            : month === "06"
            ? "June"
            : month === "07"
            ? "July"
            : month === "08"
            ? "August"
            : month === "09"
            ? "September"
            : month === "10"
            ? "October"
            : month === "11"
            ? "November"
            : month === "12"
            ? "December"
            : "Error in date"

    return `${day} ${convertedMonth} ${year}`
}
