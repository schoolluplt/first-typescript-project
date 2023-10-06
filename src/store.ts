export abstract class Store {

    nom: string;
    turnover: number;
    employees: number;

    abstract salary():string;

    constructor(nom: string, turnover: number, employees: number){
        this.nom = nom;
        this.turnover =  turnover;
        this.employees = employees;
    }

}