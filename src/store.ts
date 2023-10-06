export  class Store {

    nom: string;
    turnover: number;
    employees: number;


    constructor(nom: string, turnover: number, employees: number){
        this.nom = nom;
        this.turnover =  turnover;
        this.employees = employees;
    }

}