import { Player } from "../../src/player";

export const defects_twice = new Player('defects-twice', () => {
    // if (utils.defectCount >= 2) {
    //     return 'defect'
    // }
    return 'cooperate';
})