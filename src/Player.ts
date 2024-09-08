import { Decision } from "./types";

export abstract class Player {
    abstract isBot: boolean;
    abstract strategy(opponent: Player, round: number): Decision;
}

export abstract class BotPlayer extends Player {
    isBot = true
}

export abstract class HumanPlayer extends Player {
    isBot = false;
}
