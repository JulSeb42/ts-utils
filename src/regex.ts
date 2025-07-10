/**
 * @description Regular expression for validating password strength.
 * This regex requires at least one digit, one lowercase letter, one uppercase letter,
 * and a minimum length of 6 characters.
 *
 * @type {RegExp} Regular expression pattern for password validation
 *
 * @example
 * // Test a strong password
 * passwordRegex.test("MyPass123") // Returns true
 *
 * @example
 * // Test a weak password
 * passwordRegex.test("hello") // Returns false
 *
 * @example
 * // Use in form validation
 * const isValidPassword = passwordRegex.test(userInput)
 */
export const passwordRegex: RegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/

/**
 * @description Regular expression for validating email addresses.
 * This regex validates basic email format with local part, @ symbol, domain, and TLD.
 *
 * @type {RegExp} Regular expression pattern for email validation
 *
 * @example
 * // Test a valid email
 * emailRegex.test("user@example.com") // Returns true
 *
 * @example
 * // Test an invalid email
 * emailRegex.test("invalid-email") // Returns false
 *
 * @example
 * // Use in form validation
 * const isValidEmail = emailRegex.test(emailInput)
 */
export const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
