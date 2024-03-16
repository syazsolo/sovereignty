import { Decision, DuelReport, PlayerPoints, TurnReturns } from "./types";
import { Player } from "./player";

export class Duel {
    #pp1: PlayerPoints;
    #pp2: PlayerPoints;

    constructor(player1: Player, player2: Player, totalTurns: number = 50) {
        this.#pp1 = new PlayerPoints(player1);
        this.#pp2 = new PlayerPoints(player2);
    }

    run(totalTurns: number = 50): DuelReport {
        for (let i = 1; i < totalTurns; i++) {
            const { p1Points, p2Points } = run_turn(this.#pp1.player, this.#pp2.player);

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
                return this.#pp1.player.name;
            }
            return this.#pp2.player.name
        })();

        return {
            winner,
            totalTurns,
            player1: this.#pp1.report(),
            player2: this.#pp2.report()
        }
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