import { Animal } from "./animal";
import { AnimalSmart } from "./animal_smart";
import { AnimalDumb } from "./animal_dumb";

let lion = new AnimalSmart();
lion.nom = "Roger";
lion.poids = 190;
lion.qi = 140;

let zebra = new AnimalDumb();
zebra.nom = "Louis";
zebra.poids = 100;


console.log(lion.react("Lucie"));
console.log(zebra.react("Lucie"));
console.log("fin");
