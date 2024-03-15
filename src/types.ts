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