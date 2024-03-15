import { duel as duel_ } from "../src/duel";
import { Player } from "../src/player";

const player1 = new Player;
const player2 = new Player;

const duel = duel_(player1, player2);

console.log(duel)