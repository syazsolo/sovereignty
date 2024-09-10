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

    static computePayoffMatrix(x: number) {
        const base = [[3, 0], [5, 1]];
        return base.map(b_out => b_out.map(b_in => b_in + x));
    }
}