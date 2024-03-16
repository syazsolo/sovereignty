import { Duel } from "../src/duel";
import { Player } from "../src/player";

const player1 = new Player('luke');
const player2 = new Player('darth');

const duel = new Duel(player1, player2);
const report = duel.run();

console.log(report)