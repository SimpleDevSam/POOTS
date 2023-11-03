import prompt from 'prompt-sync';
import { Druid } from './Druid';

let mage: Druid = new Druid("The Coisa");

let teclado = prompt();
let option: number = 0;

while (mage.isDead() && option !=9 ) {
    console.log(`+========= mage ${mage.name} =============+`);
    console.log("|1. Attack                |");
    console.log("|2. Rest                |");
    console.log("|3. Status            |");
    console.log("|9. Sair                           |");
    console.log("+==================================+");

    option = +teclado("Escolha uma ação: ");

    switch (option) {
        case 1:
            let spent: number = mage.fight()
            console.log('This battle made you spent '+spent+"energy points");
            console.log(mage.status())
            break;
        case 2:
            mage.rest();
            break
        case 3:
            mage.status();
            break;
        default:
            break;
    }
}
console.log(mage.mageSkill)
console.log(mage.mana)
console.log("You're dead!")





