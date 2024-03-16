import { AlwaysCoop } from "../players/always-coop";
import { Randomly } from "../players/random";
import { Duel } from "../src/duel";

const player1 = new Randomly;
const player2 = new AlwaysCoop;

const duel = new Duel(player1, player2);
const report = duel.run(100);

console.log(report)