import yaml from 'js-yaml';
import { readFileSync } from 'fs';
import { path_ } from './_utils';

export class Colosseum {
	// const players: Player[] = []

	constructor(playerList: string) {
		const spotlight_on_players = path_('src', 'lib', 'lobby', playerList)
		let usernames = this.colosseumOpens(spotlight_on_players);

		// under dev
		this.gatherThePlayers(usernames);
	}

	private gatherThePlayers(usernames: string[]) {
		for (const username of usernames) {
			const a = path_('src', 'lib', 'lobby', '_players', username + '.ts');
			const b = readFileSync(a, 'utf8');
			
			// under dev
		}
	}

	// __luggage
	private colosseumOpens(_players: string): string[] {
		return yaml.load(readFileSync(_players, 'utf8')) as string[];
	}
}
