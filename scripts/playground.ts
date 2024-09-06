/**
 * The playground is for quickly code and console.log whatever you want.
 * Below is an example. You can `pnpm playground` to see it logs something in your terminal.
 * Feel free to replace the example with your code.
 */

// start of example

import { AssymetricGame } from "../src/Game";
import { Decision } from "../src/types";

const payoff_matrix_A = [[3, 0], [5, 1]];
const payoff_matrix_B = [[3, 5], [0, 1]];

const assymetric_game = new AssymetricGame(payoff_matrix_A, payoff_matrix_B);

const score = assymetric_game.score(Decision.defect, Decision.defect);

console.log(score);

// end of example