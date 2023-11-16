class Maison {
  nom;
  longueur;
  largeur;
  nbrEtage;

  constructor(newNom, newLongueur, newLargeur, newNbrEtage = 1) {
    this.nom = newNom;
    this.longueur = newLongueur;
    this.largeur = newLargeur;
    this.nbrEtage = newNbrEtage
  }

  //Methode
  calculPerimetre() {
    console.log(this.longueur*2+this.largeur*2+ " mètres");
  }

  calculSurface() {
    console.log(this.longueur*this.largeur*this.nbrEtage + ' metres carré');
  }
}

const maison1 = new Maison('maison1', 20, 30, 3);

maison1.calculPerimetre();
maison1.calculSurface();
