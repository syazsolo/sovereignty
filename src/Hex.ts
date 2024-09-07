import { Player } from "./Player";

export class Hex {
    private _q: number;
    private _r: number;
    private _payoff_matrix: number[][];
    private _player: Player | undefined;
    private _points = 0;

    constructor(q: number, r: number, payoff_matrix: number[][]) {
        this._q = q;
        this._r = r;
        this._payoff_matrix = payoff_matrix;
    }

    assignPlayer(player: Player) {
        this._player = player;
    }

    hasPlayer() {
        return this._player !== undefined;
    }
}