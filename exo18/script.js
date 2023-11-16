// Exercice 18 Classe et Objet :
// Gérer une PME
// Cahier des charges :

// -Un Salarié a un nom, prénom, âge, salaire mensuel
// Il est payé sur N mois.
// En plus il y a XXX de charges

// -Une Pme c’est un nom, une équipe de plusieurs salariés
// Grace à ses ventes elle a des revenus R
// Mais aussi … : 
// des frais fixes FF (impôts etc…)
// Des frais d’achats de matériel et de logiciels FA

// TODO : 
// Créer une classe Pme et une classe Employee
// Utiliser des fonctions
// Faire le bilan annuel de l’entreprise et l’afficher en console.
// (Bilan reste en solde de la Pme)

// Détails : 
// 3 salariés qui gagnent par mois : 2000, 3000 et 4000 euros
// R = 300000 (trois cent mille)
// FF = 20000 (vingt mille)
// FA = 50000 (cinquante mille)
// N = 12
// XXX = 90%

class Pme {
  nom;
  equipe;
  frais;
  constructor(nom, equipe, frais =0){
    this.nom = nom;
    this.equipe = equipe;
    this.frais = frais
  }
  revenu(montant){
    this.frais += montant;
    console.log("L'entreprise à gagné " + montant + "€");
  }

  fraisFixe(montant){
    this.frais -= montant;
    console.log("L'entreprise à " + montant + "€ de frais fixe");
  }

  fraisAnunel(montant){
    this.frais -= montant;
    console.log("L'entreprise à " + montant + "€ de frais annuel");
  }

  payeAnnuelle(nbrMois){
    for (let i=0; i<this.equipe.length; i++){
      this.frais -= (this.equipe[i].salaireMensuel)*1.10*nbrMois;   
    }
  }
}

class Employee {
  prenom;
  nom;
  age;
  salaireMensuel;

  constructor(prenom, nom, age, salaireMensuel) {
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
    this.salaireMensuel = salaireMensuel
  }
}

let monEquipe = [
   new Employee("marco", "polo", 33, 2000),
   new Employee("water", "polo", 45, 4000),
   new Employee("yves", "polo", 18, 3000)
]

console.log(monEquipe.length);


let pmeExpress = new Pme("pmeExpress", monEquipe);

pmeExpress.revenu(300000);
pmeExpress.fraisFixe(20000);
pmeExpress.fraisAnunel(50000)
pmeExpress.payeAnnuelle(12);
console.log(pmeExpress.frais);

