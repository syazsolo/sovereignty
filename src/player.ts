import { Decision } from './types';

export class Player {
    #currentTurn: number;

    receives(decision: Decision): void {

    }
    
    decide(turn: number): Decision {
        if (!this.#correctTurn(turn)) {
            throw Error();
        }

        return null;
    }

    #correctTurn(turn: number) {
        if (turn !== this.#currentTurn + 1) {
            return false;
        }

        // silently update #currentTurn
        this.#currentTurn += 1;

        return true;
    }
}