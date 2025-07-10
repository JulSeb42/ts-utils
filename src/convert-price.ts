/**
 * @description Convert a numeric price to a formatted currency string.
 * This function uses Intl.NumberFormat to format prices according to locale conventions.
 *
 * @param {number} price - The numeric price value to format
 * @param {string} [currency="EUR"] - The currency code (ISO 4217 format, defaults to "EUR")
 *
 * @returns {string} The formatted price string with currency symbol
 *
 * @example
 * // Format with default EUR currency
 * convertPrice(100) // Returns "100,00 €" (in European locale)
 *
 * @example
 * // Format with USD currency
 * convertPrice(100, "USD") // Returns "$100.00" (in US locale)
 *
 * @example
 * // Format with decimal values
 * convertPrice(99.99, "GBP") // Returns "£99.99" (in UK locale)
 */
export function convertPrice(price: number, currency: string = "EUR"): string {
    const formatter = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currency,
    })

    return formatter.format(price)
}
