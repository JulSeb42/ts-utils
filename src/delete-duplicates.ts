export const deleteDuplicates = (arr: any[]) =>
    arr.filter(
        (v, i, a) =>
            a.findIndex(v2 => JSON.stringify(v2) === JSON.stringify(v)) === i
    )
