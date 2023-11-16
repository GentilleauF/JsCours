// Créer une classe Personnage qui va contenir les éléments suivants :
// -nom, force, défense, vie
// -un méthode pour attaquer (elle va soustraire à la vie du personnage la valeur de attaque (attaquant) à défense (notre personnage),
// Créer une classe Combat qui  va contenir éléments suivants :
// -nbr de tour, score joueur 1, score joueur 2,
// -Une méthode qui va lancer les combats (elle va appeler la méthode attaque du joueur 1), (appeler la méthode d'attaque du joueur 2). 
// Cela va s'exécuter autant de tour que la valeur nbr de tour. 
// Celui qui arrive à zéro à perdu.
// Ella va afficher le nom du gagnant.

class Personnage {
  nom;
  force;
  defense;
  vie;
  constructor(nom, force, defense, vie){
    this.nom = nom;
    this.force = force;
    this.defense = defense;
    this.vie = vie;
  }

  attack(cible){
    cible.vie -= this.force / cible.defense;
  }
}


class Combat {
  nbrDeTour;

  constructor(nbrDeTour) {
    this.nbrDeTour = nbrDeTour;
    // this.scoreJoueur1 = scoreJoueur1;
    // this.scoreJoueur2 = scoreJoueur2;
  }

  startFight(joueur1, joueur2){
    for (let i=0; i<this.nbrDeTour; i++) {
      joueur1.attack(joueur2);
      joueur2.attack(joueur1);

      if(joueur1.vie == 0) {
        return "Le joueur 2 à gagné"
      }
      if(joueur2.vie == 0) {
        return "Le joueur 2 à gagné";        
      }
    }
    return `Fin du combat ${joueur1} à maintenant ${joueur1.vie} pdv`

  }
}

const pikachu = new Personnage("pikachu", 20, 10, 100)
const gandalf = new Personnage("Gandalf", 30, 20, 200)

const pikachuVsGandalf = new Combat()

console.log(pikachuVsGandalf.startFight(pikachu, gandalf));








