import { Decision, TurnReturns } from "./types";
import { Player } from "./player";

function duel(player1: Player, player2: Player, totalTurns: number = 50) {
    let p1_points = 0;
    let p2_points = 0;

    for (let i = 0; i < totalTurns; i++) {
        const { p1Points, p2Points } = runTurn(player1, player2, i);

        p1_points += p1Points;
        p2_points += p2Points;
    }

    console.log(p1_points, 'Player 1 Point')
    console.log(p2_points, 'Player 2 Point')
}

function runTurn(player1: Player, player2: Player, turn: number): TurnReturns {
    // make the decision
    const p1_decision = player1.decide(turn);
    const p2_decision = player2.decide(turn);

    // pass the decision
    player1.receives(p2_decision);
    player2.receives(p1_decision);

    // calculate the points
    const p1_points = calculatePoints(p1_decision, p2_decision);
    const p2_points = calculatePoints(p2_decision, p1_decision);

    // reward the points
    player1.rewardPoints(p1_points);
    player2.rewardPoints(p2_points);

    return { p1Points: p1_points, p2Points: p2_points }
}

function calculatePoints(gives: Decision, receives: Decision): number {
    if (gives === 'defect') {
        if (receives === 'cooperate') {
            // most sugar
            return 5;
        }
        // at least get 1
        return 1;
    }

    if (receives === 'cooperate') {
        // cooperation
        return 3;
    }

    // you get nothing
    return 0;
}