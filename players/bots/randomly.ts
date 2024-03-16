import { Player } from "../../src/player";

export const randomly = new Player('randomly', () => {
    if (Math.random() > 0.5) {
        return 'cooperate'
    }
    return 'defect';
})