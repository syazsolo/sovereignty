import { Player } from "./player";

export type Decision = 'cooperate' | 'defect';

export type TurnReturns = {
    p1Points: number,
    p2Points: number
}

export type DuelResult = {
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