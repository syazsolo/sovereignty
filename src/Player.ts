import { Strategy } from './Strategy';

export class Player extends Strategy {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }
}