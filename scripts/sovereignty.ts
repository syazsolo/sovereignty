import * as path from 'path';
import { loadPlayers } from '../src/utils';
import { BotPlayer, HumanPlayer, Player } from '../src/Player';
import { Map } from '../src/Map';

(async () => {
    // Gather the humans
    const humans_dir = path.join(__dirname, '../players/humans');
    const humans = await loadPlayers<HumanPlayer>(humans_dir);

    // Gather the bots
    const bots_dir = path.join(__dirname, '../players/bots');
    const bots = await loadPlayers<BotPlayer>(bots_dir);

    // Build the map
    const map = new Map(humans, bots);
})();