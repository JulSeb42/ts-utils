/**
 * @description Sort an array of values by their frequency of occurrence.
 * This function counts occurrences of each value (case-insensitive for strings) and sorts by frequency.
 *
 * @template T - The type of array elements
 * @param {T[]} array - The array to sort by frequency
 *
 * @returns {string[]} An array of strings sorted by frequency (most frequent first)
 *
 * @example
 * // Sort strings by frequency
 * sortByFrequency(["Hello", "Foo", "baz", "hello", "heLlo", "foo"])
 * // Returns ["hello", "foo", "baz"] (case-insensitive counting)
 *
 * @example
 * // Sort numbers by frequency
 * sortByFrequency([1, 2, 1, 3, 2, 1])
 * // Returns ["1", "2", "3"] (most frequent first)
 *
 * @example
 * // Handle mixed data types
 * sortByFrequency(["a", "B", "a", "b", "C"])
 * // Returns ["a", "b", "c"] (case-insensitive)
 */
export function sortByFrequency<T>(array: T[]): string[] {
    let frequency: any = {}
    let value: string

    for (let i = 0; i < array.length; i++) {
        value = (array[i] as any).toLowerCase()

        if (value in frequency) {
            frequency[value]++
        } else {
            frequency[value] = 1
        }
    }

    let uniques = []

    for (value in frequency) {
        uniques.push(value.toLowerCase())
    }

    const compareFrequency = (a: any, b: any) => {
        if (frequency[a] === frequency[b]) {
            return a - b
        }

        return frequency[b] - frequency[a]
    }

    return uniques.sort(compareFrequency)
}
