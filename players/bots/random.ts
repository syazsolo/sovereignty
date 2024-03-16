import { Player } from "../../src/player";
import { Decision } from "../../src/types";

export class Randomly extends Player {
    constructor() {
        super('random')
    }

    decide(): Decision {
        if (Math.random() > 0.5) {
            return 'cooperate'
        }
        return 'defect';
    }
}