import { startDueling } from "../src/duel";
import { Player } from "../src/player";

const player1 = new Player('luke');
const player2 = new Player('darth');

const duel = startDueling(player1, player2);

console.log(duel)