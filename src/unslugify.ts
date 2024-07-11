/*=============================================== Unslugify ===============================================*/

import { toSentenceCase } from "./to-sentence-case"

/**
 * @description Unslugify a string
 * @param string: string
 * @example unslugify("hello_world-foo") => Hello world foo
 */

export function unslugify(str: string): string | undefined {
    return toSentenceCase(str.replace(/-/g, " ").replace(/_/g, " "))
}
