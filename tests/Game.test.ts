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
});