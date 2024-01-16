import yaml from 'js-yaml'
// todo 🪄 import fs and not import { readFileSync } because it looks better as
import { readFileSync } from 'fs'
export class Colosseum {
    constructor(_players: string) {
        const guide = "../lobby/" + _players;
        const players = this.colosseumOpens(guide);

        console.log(players)
    }

    private colosseumOpens(_players: string) {
        return yaml.load(readFileSync(_players, 'utf8'));
    }
}