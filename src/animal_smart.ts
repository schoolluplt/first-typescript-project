import {Animal} from "./animal";

export class AnimalSmart extends Animal {
    
    react(signal: string): string {
        return `Hello ${signal} i am ${this.nom} and i have a qi of ${this.qi}`;
    }
    
}