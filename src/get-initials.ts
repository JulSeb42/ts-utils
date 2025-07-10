/**
 * @description Extract initials from a full name string.
 * This function returns the first letter of the first name and the first letter of the last name.
 *
 * @param {string} fullName - The full name to extract initials from
 *
 * @returns {string} The initials as a two-character string (first and last name initials)
 *
 * @example
 * // Get initials from full name
 * getInitials("John Doe") // Returns "JD"
 *
 * @example
 * // Get initials from multiple names
 * getInitials("Mary Jane Smith") // Returns "MS"
 *
 * @example
 * // Get initials from hyphenated names
 * getInitials("Jean-Pierre Dubois") // Returns "JD"
 */
export function getInitials(fullName: string): string {
    const splitted = fullName.split(" ")

    return `${splitted[0][0]}${splitted[splitted.length - 1][0]}`
}
