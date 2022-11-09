export const getRandom = (arr: any[]) => {
    const randomNumber = Math.floor(Math.random() * arr.length)
    return arr[randomNumber]
}
