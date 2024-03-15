import { Decision, Decisions, DuelReturns } from "./types";
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
    const { decision1, decision2 } = getDecisions(player1, player2, turn);

    // pass decision

    // give points to both players
}

function getDecisions(player1: Player, player2: Player, turn: number): Decisions {
    return {
        decision1: player1.decide(turn),
        decision2: player2.decide(turn),
    }
}

function inform(player: Player, decision: Decision) {
    //
}