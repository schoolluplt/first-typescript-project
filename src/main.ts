import { Animal } from "./animal";
import { AnimalSmart } from "./animal_smart";
import { AnimalDumb } from "./animal_dumb";

function mumuse(animal: Animal){
    console.log(animal.hello())
    console.log(animal.react("Lucie"));
}

let lion = new AnimalSmart("Roger", 190, true, 100);

let zebra = new AnimalDumb("Louis", 100, true, 90);

let elephant = new AnimalSmart("Lucie", 2000, false, 190);


// console.log(lion.react("Lucie"));
// console.log(zebra.react("Lucie"));
// console.log(elephant.react("Lucie"));

mumuse(lion);
mumuse(zebra);
mumuse(elephant);

console.log("fin");
