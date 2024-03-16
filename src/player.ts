import { Decision } from './types';

export class Player {
    name: string;
    #decide: () => Decision;
    #receives: Decision[] = [];

    constructor(name: string, decide: () => Decision) {
        this.name = name;
        this.#decide = decide;
    }

    decide(): Decision {
        return this.#decide();
    };

    receives(decision: Decision): void {
        this.#receives.push(decision);
    }
}