import { BotPlayer, Player } from "../../src/Player";
import { Decision } from "../../src/types";

export class always_coop extends BotPlayer {
    strategy(opponent: Player, round: number): Decision {
        return Decision.cooperate;
    }
}