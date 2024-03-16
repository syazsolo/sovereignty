import { runDuel } from "../src/duel";
import { Player } from "../src/player";

const player1 = new Player('luke');
const player2 = new Player('darth');

const duel = runDuel(player1, player2);

console.log(duel)