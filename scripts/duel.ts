import { always_coop } from "../players/bots/always-coop";
import { randomly } from "../players/bots/randomly";
import { Duel } from "../src/duel";


const duel = new Duel(randomly, always_coop);
const report = duel.run(100);

console.log(report)