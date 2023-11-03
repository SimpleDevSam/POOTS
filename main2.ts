import { Character } from "./Character";
import { Druid } from "./Druid";
import { Mage } from "./Mage";

let druid: Character = new Druid("Druid The Coisa");
let mage: Character = new Mage("Mage The Coisa");


const personagens: Character[] = [];

personagens.push(mage);
personagens.push(druid);

personagens.forEach(p => console.log(p instanceof Mage ? p.doAttack() : (p as Druid).doAttack()));

console.log("druid >>", druid);
console.log("druid >>", mage);

