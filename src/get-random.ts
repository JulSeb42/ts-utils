/*=============================================== Get a random value from an array ===============================================*/

export function getRandom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)]
}
