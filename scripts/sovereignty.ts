import * as path from 'path';
import { loadPlayers } from '../src/utils';

(async () => {
    const humans_dir = path.join(__dirname, '../players/humans');
    const humans = await loadPlayers(humans_dir);

    
})();