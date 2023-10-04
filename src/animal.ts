export abstract class Animal {

    nom: string;
    poids: number;
    intelligent: boolean;
    qi: number;

    hello(){
        return `Hello i am an animal`;
    }

    abstract react(signal: string):string;

    constructor(nom: string, poids: number, intelligent: boolean, qi: number){
        this.nom = nom;
        this.poids = poids;
        this.intelligent = intelligent;
        this.qi = qi;
    }

}