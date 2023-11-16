// Gérer des compte en banque :
// Créer une classe CompteBancaire avec des méthodes de crédit, de retrait, de visualisation de l’état du compte bancaire (en console), on doit pouvoir aussi faire un virement d’un membre à un autre.
// Faire une scénario avec la gestion de 3 comptes crédités à 1000 € chacun (Alex, Clovis, Marco)
// Puis Alex retire 100
// Puis Marco fait un virement de 300 à Clovis
// Enfin Alex tente un retrait de 600
// Afficher tous les soldes finaux.
// Ces compte sont placés dans un tableau associatif de clients 
// Bonus :
// Générer une exception pour ne pas dépasser le solde (pas de retrait ou de virement qui dépassent le solde du compte bancaire),
// Tester avec une tentatives de retret de Alex de 1200 €



class CompteBancaire {
  nom;
  solde;
  constructor(nom, solde){
    this.nom = nom;
    this.solde = solde;
  }

  credit(montant){
    this.solde += montant;
  }

  retrait(montant){
    if(montant> this.solde){
      console.log("Virement impossible, fons insuffisants");
    } else {
    this.solde -= montant;
    console.log("retrait de " + montant + " réalisé, nouveau solde: " + this.solde);
    }
  }

  display(){
    console.log(`Votre solde est de ${this.solde}`);
  }

  virement(montant, beneficiaire){
    if(montant> this.solde){
      console.log("Virement impossible, fonds insuffisants");
    } else {
      this.retrait(montant);
      beneficiaire.credit(montant)
      console.log("Votre virement de "+ montant + '€ a été viré à ' + beneficiaire.nom);
    }
  }

}


//INIT
let usersAccount = {
  Alex :  new CompteBancaire("Alex", 1000),
  Clovis : new CompteBancaire("Clovis", 1000),
  Marco : new CompteBancaire("Marco", 1000)
};
let crediterBtn = document.getElementById("crediter")
let debiterBtn = document.getElementById("debiter")
let virementBtn = document.getElementById("virement")



//Ajout des users
window.addEventListener("load", function() {
  const container = document.getElementById("user-container"); // Assume que tu as une div avec l'id "userContainer"

  for (const userId in usersAccount) {
      if (usersAccount.hasOwnProperty(userId)) {
          const userName = usersAccount[userId].nom;

          const userDiv = document.createElement("div");
          userDiv.textContent = userName;
          userDiv.setAttribute("id", "userId")

          userDiv.addEventListener("click", function() {

            userDiv.classList.toggle("selected")
          })
          container.appendChild(userDiv);
      }
  }
});

crediterBtn.addEventListener("click", function crediter() {
  userSelected = document.getElementsByClassName("selected")
  console.log(userSelected);
});

debiterBtn.addEventListener("click", function debiter() {
  console.log("ok");
});

virementBtn.addEventListener("click", function virement() {
  console.log("ok");
});





usersAccount["Marco"].virement(300, usersAccount["Alex"]);
usersAccount["Marco"].retrait(200);

