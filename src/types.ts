import { Player } from "./player";

export type Decision = 'cooperate' | 'defect';

export type TurnReturns = {
    p1Points: number,
    p2Points: number
}

export type DuelResult = {
    winner: string,
    player1: Player,
    player2: Player
}