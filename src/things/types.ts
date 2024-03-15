import { Player } from "./player";

export type Decision = any;

export type PlayerPoint = {
    player: Player,
    points: number
}

export type DuelReturns = {
    playerPoint1: PlayerPoint,
    playerPoint2: PlayerPoint
}

export type Decisions = {
    decision1: Decision,
    decision2: Decision,
}