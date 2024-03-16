import { Decision } from './types';

export class Player {
    name: string;
    #receives: Decision[] = [];

    constructor(name: string) {
        this.name = name;
    }

    decide(): Decision {
        return 'cooperate';
    }

    receives(decision: Decision): void {
        this.#receives.push(decision);
    }
}