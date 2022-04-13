const getFirstName = (fullName: string) => {
    let arr = fullName.split(" ")
    return arr[0]
}

export default getFirstName
