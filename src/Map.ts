import { Hex } from "./Hex";
import { BotPlayer, HumanPlayer, Player } from "./Player";
import { getRandomBetween } from "./utils";

type HexCoordinate = {
    q: number;
    r: number;
}

export class Map {
    constructor(humans: HumanPlayer[], bots: BotPlayer[]) {
        const radius = Map.computeRadius(humans.length);
        const coordinates: HexCoordinate[] = Map.computeCoordinates(radius);

        const human_hexes = Map.getHexes(humans, coordinates);

        console.log(human_hexes)
    }

    static computeRadius(humansCount: number) {
        // temporary code
        if (humansCount > 7) {
            throw new Error('Not yet')
        }

        if (humansCount === 1) {
            return 0;
        }

        return 1;
    }

    static computeCoordinates(radius: number): HexCoordinate[] {
        const hexagons = [];
        for (let q = -radius; q <= radius; q++) {
            let r1 = Math.max(-radius, -q - radius);
            let r2 = Math.min(radius, -q + radius);
            for (let r = r1; r <= r2; r++) {
                q = q === -0 ? 0 : q;
                hexagons.push({ q: q, r: r });
            }
        }
        return hexagons;
    }

    static getHexes(humans: HumanPlayer[], options: HexCoordinate[]) {
        if (options.length < humans.length) {
            throw new Error("Not enough options for all humans.");
        }

        let available = [...options];

        const hexes = humans.map((human) => {
            const random_index = Math.floor(Math.random() * available.length);

            const hex = new Hex(
                available[random_index].q,
                available[random_index].r,
                Hex.computePayoffMatrix(getRandomBetween(-1, 1))
            );

            available.splice(random_index, 1);

            return hex;
        });

        return hexes;
    }
}