import { Decision, payoff_matrix } from "./types";

export class AssymetricGame {
    payoff_matrix_A: payoff_matrix;
    payoff_matrix_B: payoff_matrix;

    constructor(payoff_matrix_A: payoff_matrix, payoff_matrix_B: payoff_matrix) {
        this.payoff_matrix_A = payoff_matrix_A;
        this.payoff_matrix_B = payoff_matrix_B;
    }

    score(decision_A: Decision, decision_B: Decision): [number, number] {
        return [
            this.payoff_matrix_A[decision_A][decision_B],
            this.payoff_matrix_B[decision_A][decision_B],
        ];
    }
}

export class Game extends AssymetricGame {
    constructor(payoff_matrix_A: payoff_matrix, payoff_matrix_B: payoff_matrix) {
        super(payoff_matrix_A, payoff_matrix_B);
    }
}
