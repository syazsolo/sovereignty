import { Player } from "../../src/player";

export const defects_twice = new Player('defects-twice', () => {
    if (Math.random() > 0.5) {
        return 'cooperate'
    }
    return 'defect';
})