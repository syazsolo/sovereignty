import { describe, expect, test } from '@jest/globals';
import { AssymetricGame } from "../src/Game";
import { Decision, PayoffMatrix } from "../src/types";

// Player_A gets extra
const payoff_matrix_A: PayoffMatrix = [[4, 1], [6, 2]];
const payoff_matrix_B: PayoffMatrix = [[3, 5], [0, 1]];

const assymetric_game = new AssymetricGame(payoff_matrix_A, payoff_matrix_B);

describe('Assymetric Game', () => {
    test('Player A cooperates, Player B cooperates', () => {
        const score = assymetric_game.score(Decision.cooperate, Decision.cooperate);
        expect(score).toStrictEqual([4, 3]);
    });

    test('Player A cooperates, Player B defects', () => {
        const score = assymetric_game.score(Decision.cooperate, Decision.defect);
        expect(score).toStrictEqual([1, 5]);
    });

    test('Player A defects, Player B cooperates', () => {
        const score = assymetric_game.score(Decision.defect, Decision.cooperate);
        expect(score).toStrictEqual([6, 0]);
    });

    test('Player A defects, Player B defects', () => {
        const score = assymetric_game.score(Decision.defect, Decision.defect);
        expect(score).toStrictEqual([2, 1]);
    });
});