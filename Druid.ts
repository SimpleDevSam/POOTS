import { Util } from "./Util";
import { Character } from "./Character";

export class Druid extends Character {
    protected _mana:number;
    protected _mageSkill:number;

    constructor (name:string) {
        super(name);
        this._energy= Util.randomize(0, 200);
        this._attack= Util.randomize(100, 1_000);
        this._defense= Util.randomize(100, 1_000);
        this._mana= Util.randomize(100, 1_000);
        this._mageSkill= Util.randomize(100, 1_000);
    }
     public doAttack() : string {
        return "Druid's Attack"
     }

    public get mana() {
        return this._mana;
    }

    public set mana(mana:number) {
        this._mana = mana;
    }

    public get mageSkill() {
        return this._mageSkill;
    }

    public set mageSkill(mageSkill:number) {
        this._mageSkill = mageSkill;
    }
}