import { Decision } from "./types";

export class AssymetricGame {
    payoff_matrix_A: number[][];
    payoff_matrix_B: number[][];

    constructor(payoff_matrix_A: number[][], payoff_matrix_B: number[][]) {
        this.payoff_matrix_A = payoff_matrix_A;
        this.payoff_matrix_B = payoff_matrix_B;
    }

    score(decision_A: Decision, decision_B: Decision): [number, number] {
        const translate = (decision: Decision) => {
            if (decision === Decision.cooperate) {
                return 0;
            }
            return 1;
        }

        const translated_A = translate(decision_A);
        const translated_B = translate(decision_B);

        return [
            this.payoff_matrix_A[translated_A][translated_B],
            this.payoff_matrix_B[translated_A][translated_B],
        ];
    }
}

export class Game extends AssymetricGame {
    constructor(matrix: number[][] = [[3, 0], [5, 1]]) {
        const transposed = matrix.map((_, colIndex) =>
            matrix.map(row => row[colIndex])
        );

        super(matrix, transposed);
    }
}