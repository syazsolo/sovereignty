import { Player } from "./Player";

export class PlayerPoints {
    #player: Player;
    #points: number = 0;

    constructor(player: Player) {
        this.#player = player;
    }

    get player() {
        return this.#player;
    }

    get points() {
        return this.#points;
    }

    reward(points: number) {
        this.#points += points;
    }

    report() {
        return { player: this.#player, points: this.#points };
    }
}