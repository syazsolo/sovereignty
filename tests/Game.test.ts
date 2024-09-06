import { describe, expect, test } from '@jest/globals';
import { AssymetricGame, Game } from "../src/Game";
import { Decision } from "../src/types";

const standard = [[3, 0], [5, 1]];

describe('Assymetric Game', () => {
    // WASIM - remove skip kat bawah ni, pastu buat bagi test pass
    describe.skip('Matrix not okay', () => {
        test('Matrix is empty', () => {
            const matrix_empty = new AssymetricGame([], []);
            const score = matrix_empty.score(Decision.cooperate, Decision.cooperate);

            expect(score).toThrow();
        });

        test('Matrix is 3x3', () => {
            const matrix_too_big = new AssymetricGame([[3, 4, 5], [3, 4, 5]], [[3, 4, 5], [3, 4, 5]]);
            const score = matrix_too_big.score(Decision.cooperate, Decision.cooperate);

            expect(score).toThrow();
        });
    })

    describe('Matrix is okay', () => {
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
    })
});

describe('Game (Symmetric Game)', () => {
    // WASIM - also this
    describe.skip('Matrix not okay', () => {
        test('Matrix is empty', () => {
            const matrix_empty = new Game([]);
            const score = matrix_empty.score(Decision.cooperate, Decision.cooperate);

            expect(score).toThrow();
        });

        test('Matrix is 3x3', () => {
            const matrix_too_big = new Game([[3, 4, 5], [3, 4, 5]]);
            const score = matrix_too_big.score(Decision.cooperate, Decision.cooperate);

            expect(score).toThrow();
        });
    })

    describe('Matrix is okay', () => {
        const game = new Game(standard);

        test('Player A cooperates, Player B cooperates', () => {
            const score = game.score(Decision.cooperate, Decision.cooperate);
            expect(score).toStrictEqual([3, 3]);
        });

        test('Player A cooperates, Player B defects', () => {
            const score = game.score(Decision.cooperate, Decision.defect);
            console.log(score);
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
    })
});