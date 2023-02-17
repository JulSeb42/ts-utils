export const camelToCapitalize = (str: string) => {
    return str.replace(/([A-Z])/g, " $1").replace(/^./, function (string) {
        return string.toUpperCase()
    })
}
