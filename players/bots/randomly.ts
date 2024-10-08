import { BotPlayer, Player } from "../../src/Player";
import { Decision } from "../../src/types";
import { randomlyTrue } from "../../src/utils";

export default class Randomly extends BotPlayer {
    strategy(opponent: Player, round: number): Decision {
        if (randomlyTrue(0.5)) {
            return Decision.cooperate;
        }
        return Decision.defect;
    }
}