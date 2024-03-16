import { Decision } from './types';

export class Player {
    name: string;
    #currentTurn: number = 1;
    #points: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    receives(decision: Decision): void { }

    decide(turn: number): Decision {
        return 'cooperate';
    }

    rewardPoints(points: number): void {
        this.#points += points;
    }
}