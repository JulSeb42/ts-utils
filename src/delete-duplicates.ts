/**
 * @description Remove duplicate values from an array while preserving order.
 * This function uses JSON serialization to compare complex objects and primitives.
 *
 * @template T - The type of array elements
 * @param {T[]} array - The array to remove duplicates from
 *
 * @returns {T[]} A new array with duplicate values removed
 *
 * @example
 * // Remove duplicates from number array
 * deleteDuplicates([1, 1, 1, 2, 3]) // Returns [1, 2, 3]
 *
 * @example
 * // Remove duplicates from string array
 * deleteDuplicates(["a", "b", "a", "c"]) // Returns ["a", "b", "c"]
 *
 * @example
 * // Remove duplicates from object array
 * deleteDuplicates([{id: 1}, {id: 2}, {id: 1}]) // Returns [{id: 1}, {id: 2}]
 */
export function deleteDuplicates<T>(array: T[]): T[] {
    return array.filter(
        (v, i, a) =>
            // @ts-ignore
            a.findIndex(v2 => JSON.stringify(v2) === JSON.stringify(v)) === i
    )
}
