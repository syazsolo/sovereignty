import { Player } from "./player";

export type Decision = 'cooperate' | 'defect';

export type TurnReturns = {
    p1Points: number,
    p2Points: number
}

export type DuelReport = {
    winner: string,
    totalTurns: number,
    player1: {
        player: Player,
        points: number
    },
    player2: {
        player: Player,
        points: number
    }
}

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

    rewardPoints(points: number) {
        this.#points += points;
    }

    report() {
        return { player: this.#player, points: this.#points };
    }
}