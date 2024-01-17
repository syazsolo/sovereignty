import yaml from 'js-yaml';
import { readFileSync } from 'fs';
import path from 'path';
import { _path } from './_utils';
import { Player } from './player';
// __luggage

export class Colosseum {
	// const players: Player[] = []

	constructor(playerList: string) {
		const light_shines_on_the_players = _path('src', 'lib', 'lobby', playerList)
		let usernames = this.colosseumOpens(light_shines_on_the_players);

		const x = this.gatherThePlayers(usernames);
	}

	private gatherThePlayers(usernames: string[]) {
		for (const username of usernames) {
			const y = _path('src', 'lib', 'lobby', '_players', username + '.ts')
			const x = readFileSync(y, 'utf8')
			console.log(x)
		}
	}

	// __luggage
	private colosseumOpens(_players: string): string[] {
		return yaml.load(readFileSync(_players, 'utf8')) as string[];
	}
}
