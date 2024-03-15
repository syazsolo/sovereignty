import { Decision } from './types';

export class Player {
    #currentTurn: number;
    name: string = 'logos';

    constructor() {
        this.#currentTurn = 1;
    }

    receives(decision: Decision): void { }

    decide(turn: number): Decision {
        if (!this.#isCorrectTurn(turn)) {
            // throw Error();
        }

        return 'cooperate';
    }

    rewardPoints(points: number): void { }

    #isCorrectTurn(turn: number) {
        if (turn !== this.#currentTurn + 1) {
            return false;
        }
        return true;
    }
}