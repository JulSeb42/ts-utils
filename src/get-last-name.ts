/**
 * @description Extract the last name from a full name string.
 * This function splits the name by spaces and returns the last part.
 *
 * @param {string} fullName - The full name to extract the last name from
 *
 * @returns {string} The last name portion of the full name
 *
 * @example
 * // Extract last name from full name
 * getLastName("John Doe") // Returns "Doe"
 *
 * @example
 * // Extract from multiple names
 * getLastName("Mary Jane Smith") // Returns "Smith"
 *
 * @example
 * // Single name returns the same
 * getLastName("Madonna") // Returns "Madonna"
 */
export function getLastName(fullName: string): string {
    const split = fullName.split(" ")
    return split[split.length - 1]
}
