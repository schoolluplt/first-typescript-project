import {Staff} from "./staff";

export class StaffAgent extends Staff {

    salary(): string {
        return `I am an agent and my name is ${this.nom}`;
    }

}