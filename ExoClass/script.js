class Animal{
    //Attributs
    espece;
    nbrPattes;
    age;
    taille;
    poid;
    //constructeur
    constructor(newEspece, newNbrPattes, newTaille, newPoid){
        this.espece = newEspece;
        this.nbrPattes = newNbrPattes;
        this.taille = newTaille;
        this.poid = newPoid;
    }
    //Méthodes
    crier(){
        if (this.espece == "coq"){
        console.log('cocorico');
        }
        if(this.espece == "chien"){
        console.log('waf');
        }
    }
    
    dormir(){
        console.log("zzzz");
    }
}

const coq = new Animal('coq', 2, 40, 3);
const chien = new Animal('chien', 4, 50, 9);


coq.crier();
chien.crier();

coq.dormir();
chien.dormir();