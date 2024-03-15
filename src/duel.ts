import { DuelReturns } from "./types";
import { Player } from "./player";

function duel(player1: Player, player2: Player, totalTurns: number = 50): DuelReturns {
    runTurn(player1, player2, 1);
    runTurn(player1, player2, 2);
    runTurn(player1, player2, 3);

    return {
        playerPoint1: {
            player: player1,
            points: 0
        },
        playerPoint2: {
            player: player1,
            points: 0
        }
    }
}

function runTurn(player1: Player, player2: Player, turn: number) {
    // make the decision
    const decision1 = player1.decide(turn);
    const decision2 = player2.decide(turn);

    // pass the decision
    player1.receives(decision2);
    player2.receives(decision1);

    // calculate the points

    // reward the points
}