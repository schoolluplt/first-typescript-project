export abstract class Staff {

    nom: string;

    abstract salary():string;

    constructor(nom: string){
        this.nom = nom;
    }

}