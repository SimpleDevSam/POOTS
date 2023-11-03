import { Util } from "./Util";

export class Character {

    protected _name: string;
    protected _energy: number;
    protected _attack: number;
    protected _defense: number;

    constructor(name:string)
        { 
        this._name= name;
        this._energy= Util.randomize(0, 200);
        this._attack= Util.randomize(100, 1_000);
        this._defense= Util.randomize(100, 1_000);
        }

    public status(): string {
        return (
            "Character: \n" +
            "\nName: " +
            this._name +
            ("\nEnergy: " + this.energy.toFixed(1)) +
            ("\nAttack: " + this.attack.toFixed(1)) +
            ("\nDefense: " + this.defense.toFixed(1))
        );
    }

    public doAttack(): string {
        return "Generic character attack"
    }

    public get name() : string {
        return this._name;
    }

    public set name(name:string) {
        this._name = name
    }

    public get energy() : number {
        return this._energy;
    }

    public set energy(energy:number) {
        this._energy = energy
    }

    public get attack() : number {
        return this._attack;
    }

    public set attack(attack:number) {
        this._attack = attack
    }

    public get defense() : number {
        return this._defense;
    }

    public set defense(defense:number) {
        this._defense = defense
    }

    public rest(): void {
        this.energy += this.randomize(10);
        if (this.energy > 100) {
            this.energy = 100
        }
    }

    public fight(): number {
        let spent: number = this.randomize(10);
        this.energy -= spent
        return spent
    }

    public isDead(): boolean {
        return this.energy > 0;
    }

    private randomize(fator : number) : number {
      return (Math.round(Math.random() * fator))
    }

    }

