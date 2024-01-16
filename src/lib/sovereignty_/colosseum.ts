import yaml from 'js-yaml';
import { readFileSync } from 'fs';
import path from 'path';
import { _path } from './_utils';
export class Colosseum {
	constructor(_players: string) {
		const guide = _path('src', 'lib', 'lobby', _players)
		// const players = this.colosseumOpens(guide);
	}

	private colosseumOpens(_players: string) {
		return yaml.load(readFileSync(_players, 'utf8'));
	}
}
