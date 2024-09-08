/**
 * The playground is for quickly code and console.log whatever you want.
 * Below is one example for you to refer. You can `pnpm playground` to see it logs something in your terminal.
 * Feel free to replace the example with your code.
 */

import { Game } from "../src/Game";
import { Decision } from "../src/types";

const game = new Game();
const score = game.score(Decision.cooperate, Decision.defect);

console.log(score);