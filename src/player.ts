import { Decision } from './types';

export class Player {
    name: string;
    #currentTurn: number = 1;
    #opponentHistory: Decision[];

    constructor(name: string) {
        this.name = name;
    }

    decide(): Decision {
        this.#currentTurn += 1;

        return 'cooperate';
    }

    receives(decision: Decision): void {
        this.#opponentHistory.push(decision);
    }

    totalTurns(): number {
        return this.#currentTurn - 1;
    }
}