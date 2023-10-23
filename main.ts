import prompt from 'prompt-sync';
import Character from "./Personagem";

let sansa: Character = new Character("Sansa",100,40,20,20);

let teclado = prompt();
let option: number = 0;

while (option != 9) {
    console.log("+========= Character =============+");
    console.log("|1. Attack                |");
    console.log("|2. Rest                |");
    console.log("|3. Status            |");
    console.log("|9. Sair                           |");
    console.log("+==================================+");

    option = +teclado("Escolha uma ação: ");

    switch (option) {
        case 1:
            let spent = sansa.fight()
            console.log('This battle made you spent '+spent+"energy points");
            break;
        case 2:
            sansa.rest();
            break
        case 3:
            sansa.status();
            break;
        default:
            break;
    }
}





