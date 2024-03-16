import { Decision } from './types';

export class Player {
    name: string;
    #decide: () => Decision;
    #track: Decision[] = [];

    constructor(name: string, decide: () => Decision) {
        this.name = name;
        this.#decide = decide;
    }

    decide(): Decision {
        return this.#decide();
    };

    receives(decision: Decision): void {
        this.#track.push(decision);
    }
}