/** Here we hide the ancient code with modernity */

import path from "path";

export function _path(...paths: string[]) {
    return path.join(process.cwd(), ...paths);
}
