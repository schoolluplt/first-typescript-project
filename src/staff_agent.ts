import {Staff} from "./staff";

export class StaffAgent extends Staff {

    override goToWork(consigne?: string): string {
        let response = super.goToWork();
        return `${response} but do you talk to me ?`;
    }
    salary(): string {
        return `I am an agent and my name is ${this.nom}`;
    }

   talk(sentence: string): string {
        return `I am an agent and I say ${sentence}`;
    }


}