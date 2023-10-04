import {Animal} from "./animal";

export class AnimalDumb extends Animal {


    react(signal: string): string{

        return `I am a dumb animal with a qi of ${this.qi}`;

    }

}