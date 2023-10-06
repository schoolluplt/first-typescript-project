import { ITalk } from "./interfaces/i-talk";
import { StaffAgent } from "./staff_agent";
import { Zoo } from "./zoo";


const myZoo = Zoo.mock();

// function talkWith(talker: ITalk){

//     console.log(talker.talk("hello"));

//     for (let sentence of talker.blabla()){
//         console.log(sentence);
//     }
// }

// console.log(myZoo);

// for (let animal of myZoo.animals){
//     talkWith(animal);
// }


// for (let staff of myZoo.staff){
//     talkWith(staff);
// }

let staff = new StaffAgent("staff1");

console.log(staff.goToWork());