import { ITalk } from "./interfaces/i-talk";

export abstract class Staff implements ITalk {

    nom: string;

    abstract salary():string;

    constructor(nom: string){
        this.nom = nom;
    }

    abstract talk(sentence: string): string;

    blabla(): string[] {
        return ["salut", "bonjour", "hello", "coucou"];
    }

    goToWork(): string {
        return `You talk alone,`;
    }

}