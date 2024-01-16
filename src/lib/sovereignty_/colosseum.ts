import yaml from 'js-yaml';
import { readFileSync } from 'fs';
import path from 'path';
import { _path } from './_utils';
import type { Player } from './player';
// __luggage

export class Colosseum {
	// const players: Player[] = []

	constructor(_players: string) {
		const shine = _path('src', 'lib', 'lobby', _players)
		let list = this.colosseumOpens(shine);
	}

	private colosseumOpens(_players: string): string[] {
		return yaml.load(readFileSync(_players, 'utf8')) as string[];
	}
}
