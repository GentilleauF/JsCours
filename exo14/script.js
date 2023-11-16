class Imc {
  nom;
  poid;
  taille;

  constructor(nom, poid, taille){
    this.nom =nom;
    this.poid = poid;
    this.taille= taille;
  }

  calculImc() {
    let imc = this.poid/(this.taille*this.taille) 
    return imc.toFixed(2)
  }

  display() {
    console.log(`${this.nom} mesure ${this.taille} et pése ${this.poid} son IMC est de ${this.calculImc()}`);
  }
}

const personne1 = new Imc("Francois", 68, 1.80)

personne1.calculImc()
personne1.display()

let list = [new Imc("personne2", 60, 1.66), new Imc("personne3", 80, 1.90),new Imc("personne4", 75, 1.76)];

//methode1
for (let i=0; i<list.length; i++) {
  list[i].display();
}

//methode 2
list.forEach((element) => element.display());