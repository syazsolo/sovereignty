import { BotPlayer, Player } from "../../src/Player";
import { Decision } from "../../src/types";

export default class AlwaysDefect extends BotPlayer {
    strategy(opponent: Player, round: number): Decision {
        return Decision.defect;
    }
}