import { Decision } from './types';

export class Strategy {
    #history: Decision[] = [];

    receives(decision: Decision): void {
        this.#history.push(decision);
    }

    decide(): Decision {
        return 'cooperate';
    }

    defectsCount(n: number) {
        return this.#history.length === n;
    }
}