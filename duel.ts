import { Decision, Player } from "./types";
// import { log } from "./utils";

function duel(player1: Player, player2: Player, totalTurns: number = 50) {
    runTurn(player1, player2, 1);
    runTurn(player1, player2, 2);
    runTurn(player1, player2, 3);
}

function runTurn(player1: Player, player2: Player, turn: number) {
    // const decision1 = player1.decide(turn);
    // const decision2 = player2.decide(turn);

    // pass decision

    // count points
}

function inform(player: Player, decision: Decision) {
    // do what
}