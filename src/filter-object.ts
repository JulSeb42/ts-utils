/*=============================================== Filter object ===============================================*/

/**
 * @description Filter any object by value
 * @example filterObject({ id: 0, name: null }, ([_, v]) => v !== null) => { id: 0 }
 */

type Entry<T> = {
    [K in keyof T]: [K, T[K]]
}[keyof T]

export function filterObject<T extends object>(
    obj: T,
    fn: (entry: Entry<T>, i: number, arr: Entry<T>[]) => boolean
): Partial<T> {
    const next = { ...obj }

    const entries: Entry<T>[] = []

    for (const key in obj) {
        entries.push([key, obj[key]])
    }

    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i]
        if (!fn(entry, i, entries)) {
            delete next[entry[0]]
        }
    }

    return next
}
