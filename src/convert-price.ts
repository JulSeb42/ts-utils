/*=============================================== Convert price to 100,00 € ===============================================*/

/**
 * @description Convert a price with currency
 * @example convertPrice(100) => 100,00 €
 */

export function convertPrice(num: number, currency?: string): string {
    const formatter = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currency || "EUR",
    })

    return formatter.format(num)
}
