import { Decision, DuelResult, PlayerPoints, TurnReturns } from "./types";
import { Player } from "./player";

class duel {
    #pp1: PlayerPoints;
    #pp2: PlayerPoints;

    constructor(player1: Player, player2: Player) {
        this.#pp1 = new PlayerPoints(player1);
        this.#pp2 = new PlayerPoints(player2);
    }

    runDuel(player1: Player, player2: Player, totalTurns: number = 50): DuelResult {
        for (let i = 1; i < totalTurns; i++) {
            const { p1Points, p2Points } = run_turn(player1, player2);

            this.#pp1.rewardPoints(p1Points);
            this.#pp2.rewardPoints(p2Points);
        }

        const winner = (() => {
            const p1_points = this.#pp1.points;
            const p2_points = this.#pp2.points;

            if (p1_points === p2_points) {
                return '-';
            }
            if (p1_points > p2_points) {
                return player1.name;
            }
            return player2.name
        })();

        return {
            winner,
            totalTurns,
            player1: this.#pp1.report(),
            player2: this.#pp2.report()
        }
    }
}

export function runDuel(player1: Player, player2: Player, totalTurns: number = 50): DuelResult {
    let p1_points = 0;
    let p2_points = 0;

    for (let i = 1; i < totalTurns; i++) {
        const { p1Points, p2Points } = run_turn(player1, player2);

        p1_points += p1Points;
        p2_points += p2Points;
    }

    const winner = (() => {
        if (p1_points === p2_points) {
            return '-';
        }
        if (p1_points > p2_points) {
            return player1.name;
        }
        return player2.name
    })();

    return {
        winner,
        totalTurns,
        player1: { player: player1, points: p1_points },
        player2: { player: player2, points: p2_points }
    }
}

function run_turn(player1: Player, player2: Player): TurnReturns {
    // both players make the decision
    const p1_decision = player1.decide();
    const p2_decision = player2.decide();

    // both players receive the decision
    player1.receives(p2_decision);
    player2.receives(p1_decision);

    // calculate the points
    const p1_points = calculate_points(p1_decision, p2_decision);
    const p2_points = calculate_points(p2_decision, p1_decision);

    return { p1Points: p1_points, p2Points: p2_points }
}

function calculate_points(gives: Decision, receives: Decision): number {
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