import { Decision } from './types';

export class Player {
    name: string;
    #currentTurn: number = 1;

    constructor(name: string) {
        this.name = name;
    }

    receives(decision: Decision): void { }

    decide(): Decision {
        this.#currentTurn += 1;

        return 'cooperate';
    }
}