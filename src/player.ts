import { Decision } from './types';

export abstract class Player {
    name: string;
    #receives: Decision[] = [];

    constructor(name: string) {
        this.name = name;
    }

    abstract decide(): Decision;

    receives(decision: Decision): void {
        this.#receives.push(decision);
    }
}