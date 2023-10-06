import {Staff} from "./staff";

export class StaffVet extends Staff {

    salary(): string {
        return `I am a vet and my name is ${this.nom}`;
    }
    talk(sentence: string): string {
        return `I am a vet and I say ${sentence}`;
    }
}