import { AssymetricGame } from "../src/Game";
import { Decision, payoff_matrix } from "../src/types";

const payoff_matrix_A: payoff_matrix = [[3, 0], [5, 1]];
const payoff_matrix_B: payoff_matrix = [[3, 5], [0, 1]];

const assymetric_game = new AssymetricGame(payoff_matrix_A, payoff_matrix_B);

const x = assymetric_game.score(Decision.defect, Decision.defect);

console.log(x);