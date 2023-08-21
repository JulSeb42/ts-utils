/*=============================================== Delete duplicates values from array ===============================================*/

export function deleteDuplicates<T>(arr: T[]): T[] {
    return arr.filter(
        (v, i, a) =>
            // @ts-ignore
            a.findIndex(v2 => JSON.stringify(v2) === JSON.stringify(v)) === i
    )
}
