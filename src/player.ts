import { Strategy } from './strategy';

export class Player extends Strategy {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }
}