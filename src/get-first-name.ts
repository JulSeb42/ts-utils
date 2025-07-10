/**
 * @description Extract the first name from a full name string.
 * This function splits the name by spaces and returns the first part.
 *
 * @param {string} fullName - The full name to extract the first name from
 *
 * @returns {string} The first name portion of the full name
 *
 * @example
 * // Extract first name from full name
 * getFirstName("John Doe") // Returns "John"
 *
 * @example
 * // Extract from multiple names
 * getFirstName("Mary Jane Smith") // Returns "Mary"
 *
 * @example
 * // Single name returns the same
 * getFirstName("Madonna") // Returns "Madonna"
 */
export function getFirstName(fullName: string): string {
    return fullName.split(" ")[0]
}
