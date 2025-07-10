type Entry<T> = {
    [K in keyof T]: [K, T[K]]
}[keyof T]

/**
 * @description Filter an object by its values using a callback function.
 * This function applies a filter callback to each key-value pair and returns a new object
 * containing only the entries that pass the filter condition.
 *
 * @template T - The type of the input object
 * @param {T} object - The object to filter
 * @param {function} callback - Filter function that receives [key, value] entry, index, and entries array
 *
 * @returns {Partial<T>} A new object containing only the filtered entries
 *
 * @example
 * // Filter out null values
 * filterObject({ id: 0, name: null, age: 25 }, ([_, v]) => v !== null)
 * // Returns { id: 0, age: 25 }
 *
 * @example
 * // Filter by value type
 * filterObject({ a: 1, b: "hello", c: 3 }, ([_, v]) => typeof v === "number")
 * // Returns { a: 1, c: 3 }
 *
 * @example
 * // Filter by key pattern
 * filterObject({ userId: 1, userName: "john", email: "john@example.com" }, ([k, _]) => k.startsWith("user"))
 * // Returns { userId: 1, userName: "john" }
 */
export function filterObject<T extends object>(
    object: T,
    callback: (entry: Entry<T>, i: number, arr: Entry<T>[]) => boolean
): Partial<T> {
    const next = { ...object }

    const entries: Entry<T>[] = []

    for (const key in object) {
        entries.push([key, object[key]])
    }

    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i]
        if (!callback(entry, i, entries)) {
            delete next[entry[0]]
        }
    }

    return next
}
