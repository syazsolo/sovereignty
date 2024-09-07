import { Player } from "./Player";

export class Map {
    private _century = 1;
    private _players: Player[] = [];

    /** Play the game */
    advance() {
        // other stuff
        this._century++;
    }
}