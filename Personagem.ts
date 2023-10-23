

export default class Character {
    constructor(
        public name: string,
        public energy: number,
        public life: number,
        public attack: number,
        public defense: number,
    ) {}

    status(): void{
        console.log('Warrior:');
        console.log("Name:", this.name);
        console.log("Energy:",this.energy.toFixed(1));
        console.log("Attack:",this.attack.toFixed(1));
        console.log("Defense:",this.defense.toFixed(1));
    } 

    rest(): void{
        this.energy += Math.random() *10;
        if (this.energy>100) {
            this.energy=100
        }
    }

    fight(): number{
        let spent: number = Math.round(Math.random()*100);
        this.energy -= spent
        return spent
    }

    isDead(): boolean {
        if(this.energy<0){
            console.log("You are dead")
            return true;
        } else {
            return false;
        }
    }

}

