import {Store} from "./store";
import {Animal} from "./animal";
import {Staff} from "./staff";
import { AnimalDumb } from "./animal_dumb";
import { AnimalSmart } from "./animal_smart";
import { StaffAgent } from "./staff_agent";
import { StaffVet } from "./staff_vet";

export class Zoo {

    nom: string = "";
    shops: Store[] = [];
    animals: Animal[] = [];
    staff: Staff[] = [];

    static mock(): Zoo {

        let zoo = new Zoo();
        
        zoo.shops.push(new Store("kiosk", 30000, 30));

        zoo.animals.push(new AnimalDumb("Mouse",10, 1111));
        zoo.animals.push(new AnimalDumb("dumb2",20, 2222));
        zoo.animals.push(new AnimalSmart("smart1",30, 3333));

        zoo.staff.push(new StaffAgent("staff1"));
        zoo.staff.push(new StaffAgent("staff2"));
        zoo.staff.push(new StaffAgent("staff3"));
        zoo.staff.push(new StaffVet("staff4"));


        return zoo;
    }

}