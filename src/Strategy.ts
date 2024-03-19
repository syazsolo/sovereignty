import { Decide, Decision } from './types';

export class Strategy {
    #decide: Decide;
    #opponent_history: Decision[] = [];

    receives(decision: Decision): void {
        this.#opponent_history.push(decision);
    }

    decide(): Decision {
        return this.#decide();
    }

    ifDefectsCount(n: number, decide: () => Decision) {
        if (this.#opponent_history.length === n) {
            
        }
    }
}