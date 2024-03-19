import { PlayerPoints } from "./PlayerPoints";
import { Player } from "./Player";
import { Decision, DuelReport } from "./types";

export class Duel {
    #pp1: PlayerPoints;
    #pp2: PlayerPoints;

    constructor(player1: Player, player2: Player) {
        this.#pp1 = new PlayerPoints(player1);
        this.#pp2 = new PlayerPoints(player2);
    }

    run(turns: number = 100): DuelReport {
        const player1 = this.#pp1.player;
        const player2 = this.#pp2.player;

        for (let i = 1; i < turns; i++) {
            // both players make the decision
            const p1_decision = player1.decide();
            const p2_decision = player2.decide();

            // both players receive the decision
            player1.receives(p2_decision);
            player2.receives(p1_decision);

            // calculate the points
            const p1_points = calculate_points(p1_decision, p2_decision);
            const p2_points = calculate_points(p2_decision, p1_decision);

            this.#pp1.reward(p1_points);
            this.#pp2.reward(p2_points);
        }

        return {
            turns,
            player1: this.#pp1.report(),
            player2: this.#pp2.report()
        }
    }
}

function calculate_points(gives: Decision, receives: Decision): number {
    if (gives === 'defect') {
        if (receives === 'cooperate') {
            return 5; // most sugar
        }
        return 1; // at least get 1
    }

    if (receives === 'cooperate') {
        return 3; // cooperation
    }

    return 0; // you get nothing
}