class CompteBancaire{
    constructor(nom, solde){
        this.nom = nom;
        this.solde = solde;
    }
    credit(montant){
        this.solde += montant;
    }
    debit(montant){
        if(this.solde < montant){
           throw new Error("les fonds ne sont pas disponible"); 
        }
        if(montant < 0){
            throw new Error("Un retrait négatif est impossible");  
        }
        try{
            this.solde -= montantkjhugi_ykjgjblb;
        }
        catch(error){
            return error;
        }
    }
    virement(montant, client){
        this.debit(montant);
        if(this.solde<montant){
            console.log("le virement est impossible");
        }
        else{
           client.credit(montant); 
        }
    }
    detail(){
        return `${this.nom} posséde : ${this.solde}`;
    }
}
//instancier 3 utilisateurs
const alex = new CompteBancaire("Alex", 1000);
const clovis = new CompteBancaire("Clovis", 1000);
const marco = new CompteBancaire("Marco", 1000);

console.log(alex.debit(100));