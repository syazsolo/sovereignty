import { HumanPlayer, Player } from "../../src/Player";
import { Decision } from "../../src/types";

export default class Player2 extends HumanPlayer {
    strategy(opponent: Player, round: number): Decision {
        return Decision.cooperate;
    }
}