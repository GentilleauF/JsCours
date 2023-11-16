class Vehicule {
  nom;
  couleur;
  nbrRoue;
  vitesse;
  constructor(nom, couleur, nbrRoue, vitesse) {
    this.nom = nom;
    this.couleur = couleur;
    this.nbrRoue = nbrRoue;
    this.vitesse = vitesse;
  }

  detect() {
    if(this.nbrRoue == 2) {
      console.log(`C'est une moto de la marque ${this.nom}`);
    }
    if(this.nbrRoue == 4) {
      console.log(`C'est une voiture de la marque ${this.nom}`);
    }
  }

  boost() {
    return this.vitesse += 50;
  }

  plusRapide(){
    if(moto.vitesse> voiture.vitesse){
      console.log("La moto est plus rapide");
    } else {
      console.log("la voiture est plus rapide");
    }
  }

}

const voiture = new Vehicule("Mercede CLK", "blanche", 4, 250);
const moto = new Vehicule("Honda CBR", "blanche", 2, 280);

moto.detect();
voiture.detect();

moto.boost();

console.log(voiture.vitesse);

voiture.plusRapide()





