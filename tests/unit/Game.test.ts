import { describe, expect, test } from '@jest/globals';
import { AssymetricGame, Game } from "../src/Game";
import { Decision } from "../src/types";

describe('Assymetric Game', () => {
    // WASIM - remove skip kat bawah ni, pastu buat bagi test pass
    test.skip('Matrix is empty', () => {
        const matrix_empty = new AssymetricGame([], []);
        const score = matrix_empty.score(Decision.cooperate, Decision.cooperate);

        expect(score).toThrow();
    });

    const standard = [[3, 0], [5, 1]];
    const matrix_B = [[4, 6], [1, 2]];

    const assymetric_game = new AssymetricGame(standard, matrix_B);

    test('Player A cooperates, Player B cooperates', () => {
        const score = assymetric_game.score(Decision.cooperate, Decision.cooperate);
        expect(score).toStrictEqual([3, 4]);
    });

    test('Player A cooperates, Player B defects', () => {
        const score = assymetric_game.score(Decision.cooperate, Decision.defect);
        expect(score).toStrictEqual([0, 6]);
    });

    test('Player A defects, Player B cooperates', () => {
        const score = assymetric_game.score(Decision.defect, Decision.cooperate);
        expect(score).toStrictEqual([5, 1]);
    });

    test('Player A defects, Player B defects', () => {
        const score = assymetric_game.score(Decision.defect, Decision.defect);
        expect(score).toStrictEqual([1, 2]);
    });
});

describe('Game (Symmetric Game)', () => {
    const game = new Game();

    test('Player A cooperates, Player B cooperates', () => {
        const score = game.score(Decision.cooperate, Decision.cooperate);
        expect(score).toStrictEqual([3, 3]);
    });

    test('Player A cooperates, Player B defects', () => {
        const score = game.score(Decision.cooperate, Decision.defect);
        expect(score).toStrictEqual([0, 5]);
    });

    test('Player A defects, Player B cooperates', () => {
        const score = game.score(Decision.defect, Decision.cooperate);
        expect(score).toStrictEqual([5, 0]);
    });

    test('Player A defects, Player B defects', () => {
        const score = game.score(Decision.defect, Decision.defect);
        expect(score).toStrictEqual([1, 1]);
    });
});