/*=============================================== Delete duplicates ===============================================*/

/**
 * @description Delete duplicated values from array
 * @param arr: T[]
 * @example deleteDuplicates([1, 1, 1, 2, 3]) => [1, 2, 3]
 */

export function deleteDuplicates<T>(arr: T[]): T[] {
    return arr.filter(
        (v, i, a) =>
            // @ts-ignore
            a.findIndex(v2 => JSON.stringify(v2) === JSON.stringify(v)) === i
    )
}
