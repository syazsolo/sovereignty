/** The wonder that is a human. Hiding plain ancienity behind simple modernity */

import path from "path";

export function _path(...paths: string[]) {
    return path.join(process.cwd(), ...paths);
}
