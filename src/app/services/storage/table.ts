import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

export class Table{
    NOTES = 'notes';

    protected obs= {}; //object
    protected mut = {}; //mutator

    constructor(){
        for(let table in this){
            if(table != "obs" && table != "mut"){
                this.obs[this[table].toString()] = new BehaviorSubject(null);
                this.mut[this[table].toString()]= "";
            }
        }
    }

}