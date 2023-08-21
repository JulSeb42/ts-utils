/*=============================================== Convert string To sentence case ===============================================*/

export function toSentenceCase(string: string): string | undefined {
    return (
        string.toLowerCase().charAt(0).toUpperCase() +
        string.slice(1).toLowerCase()
    )
}
