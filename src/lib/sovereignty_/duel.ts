import _ from 'lodash';
import type { Strategy } from './strategy';
import type { Rules } from './rules';

export class Duel {
    strategy1: Strategy;
    strategy2: Strategy;
    rules: Rules;

    constructor(strategy1: Strategy, strategy2: Strategy, rules: Rules) {
        // todo 🪄 can make this constructor shorter?
        this.strategy1 = strategy1;
        this.strategy2 = strategy2;
        this.rules = rules;
    };

    //                                  //          
    //              battle              //
    //                                  //

    // who starts?
    coinToss(): Strategy {
        return _.sample([this.strategy1, this.strategy2]);
    }

    inform(): void {

    }

    //                                  //          
    //              result              //
    //                                  //


}