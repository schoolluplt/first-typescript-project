import { ITalk } from "./interfaces/i-talk";

export abstract class Animal implements ITalk{

    readonly nom: string;
    poids: number;
    qi: number;

    hello(){
        return `Hello i am an animal`;
    }

    talk(sentence: string): string {
        return `${this.nom} says ${sentence}`;
    }

    blabla(): string[] {
        return ["blabla"];
    }
    

    abstract react(signal: string):string;

    constructor(nom: string, poids: number, qi: number){
        this.nom = nom;
        this.poids = poids;
        this.qi = qi;
    }

}