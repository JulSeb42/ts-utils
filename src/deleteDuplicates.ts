export const deleteDuplicates = (arr: any[]) =>
    [...new Set(arr.map(object => JSON.stringify(object)))].map(string =>
        JSON.parse(string)
    )
