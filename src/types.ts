import { Player } from "./Player";

export type Decision = 'cooperate' | 'defect';

export type TurnReturns = {
    p1Points: number,
    p2Points: number
}

export type DuelReport = {
    turns: number,
    player1: {
        player: Player,
        points: number
    },
    player2: {
        player: Player,
        points: number
    }
}

export type Decide = () => Decision;