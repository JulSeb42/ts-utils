/*=============================================== Unslugify ===============================================*/

/**
 * @description Unslugify a string
 * @example unslugify("hello_world-foo") => Hello world foo
 */

import { toSentenceCase } from "./to-sentence-case"

export function unslugify(str: string): string | undefined {
    return toSentenceCase(str.replace(/-/g, " ").replace(/_/g, " "))
}
