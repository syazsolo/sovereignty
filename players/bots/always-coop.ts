import { Player } from "../../src/player";
import { Decision } from "../../src/types";

export class AlwaysCoop extends Player {
    constructor() {
        super('always-coop')
    }

    decide(): Decision {
        return 'cooperate';
    }
}