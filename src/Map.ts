import { BotPlayer, HumanPlayer, Player } from "./Player";

export class Map {
    constructor(humans: HumanPlayer[], bots: BotPlayer[]) {
        const radius = Map.decideRadius(humans.length);
        const hexs = Map.generateHexGrid(radius);
        console.log(hexs);
    }

    static decideRadius(humanCount: number) {
        // temporary code
        return 1;
    }

    // TODO - make this functional
    static generateHexGrid(radius: number) {
        const hexagons = [];
        for (let q = -radius; q <= radius; q++) {
            let r1 = Math.max(-radius, -q - radius);
            let r2 = Math.min(radius, -q + radius);
            for (let r = r1; r <= r2; r++) {
                hexagons.push({ q: q, r: r });
            }
        }
        return hexagons;
    }
}