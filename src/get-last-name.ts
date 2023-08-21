/*=============================================== Get last name from `John Doe` ===============================================*/

export function getLastName(str: string): string {
    const split = str.split(" ")
    return split[split.length - 1]
}
