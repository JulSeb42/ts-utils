/*=============================================== Get first name from `John Doe` ===============================================*/

export function getFirstName(fullName: string): string {
    return fullName.split(" ")[0]
}
