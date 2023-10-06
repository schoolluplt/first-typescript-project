import {Staff} from "./staff";

export class StaffVet extends Staff {

    salary(): string {
        return `I am a vet and my name is ${this.nom}`;
    }

}