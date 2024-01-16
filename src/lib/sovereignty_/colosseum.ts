import yaml from 'js-yaml';
import { readFileSync } from 'fs';
import path from 'path';
import { _path } from './_utils';
import type { Player } from './player';
export class Colosseum {
	// const players: Player[] = []

	constructor(_players: string) {
		const guide = _path('src', 'lib', 'lobby', _players)
		let list = this.colosseumOpens(guide);

		console.log(list)
	}

	private colosseumOpens(_players: string): string[] {
		return yaml.load(readFileSync(_players, 'utf8')) as string[];
	}
}