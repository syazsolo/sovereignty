import { Player } from "../../src/Player";
import { Decision } from "../../src/types";

export class always_coop implements Player {
    strategy(): Decision {
        return Decision.cooperate;
    }
}