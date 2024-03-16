import { Player } from "../../src/player";
import { Decision } from "../../src/types";

export class DefectTwice extends Player {
    constructor() {
        super('defect-twice')
    }

    decide(): Decision {
        return 'cooperate';
    }
}