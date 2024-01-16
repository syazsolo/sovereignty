import _ from 'lodash';
import type { Player } from './player';
import type { Rules } from './rules';

export class Duel {
    player1: Player;
    player2: Player;
    rules: Rules;

    constructor(player1: Player, player2: Player, rules: Rules) {
        // todo 🪄 can make this constructor shorter?
        this.player1 = player1;
        this.player2 = player2;
        this.rules = rules;
    };

    //                                  //          
    //              battle              //
    //                                  //

    // who starts?
    coinToss(): Player {
        return _.sample([this.player1, this.player2]);
    }

    inform(): void {

    }

    //                                  //          
    //              result              //
    //                                  //


}