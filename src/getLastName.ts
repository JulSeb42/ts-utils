export const getLastName = (str: string) => {
    const split = str.split(" ")
    return split[split.length - 1]
}
