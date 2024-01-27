/** To hide the ancient code from the humans */

import path from "path";

export function path_(...paths: string[]) {
    return path.join(process.cwd(), ...paths);
}
