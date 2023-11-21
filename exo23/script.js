// Exercice 23 DOM :
// Partie HTML :
// Ajouter dans la page les éléments suivants :
// -1 input type text (id = email),
// -1 input type password(id= password),
// -1 input type button (id=bt)
// Partie JS :
// 1 Ajouter un écouteur événement (keyup (touche clavier est relâchée )-> input (id= email) 
//          -> vérifier si le contenu de l'input (id= email) match  le pattern suivant :
//                    --
// let regexEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//          -> si le emailmatch le pattern mettre l'input (email) en vert (backgroundColor)
//          -> sinon mettre l'input (email) en rouge(backgroundColor)
// 2 Ajouter un écouteur événement (blur(désélection de l'input)-> input (id= password) 
//          -> vérifier si le contenu de l'input (id= password) match  le pattern suivant :
// let regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{12,20}$/;

//          -> si le password match le pattern mettre l'input (password) en vert (backgroundColor)
//          -> sinon mettre l'input (password) en rouge(backgroundColor)
// Bonus : Ajouter un paragraphe (id = error)  dans la partie HTML :
// Afficher à l'intérieur :
// Si le password et l' email sont valides => valide,
// Si le password ou l' email sont invalides => invalide ,
// Utiliser test() plutôt que match() dans vos conditions.
let regexEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{12,20}$/;

let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let resultInput = document.getElementById('resultat');
let seConnecter = document.getElementById('bt');


//Verif du mail
emailInput.addEventListener("keyup", function() {

  if(regexEmail.test(emailInput.value) == true) {
    emailInput.style.background = ("green");
  } else {
    emailInput.style.background = ('red');
  }
});

//Verif du MDP
passwordInput.addEventListener("blur", function() {
  if (regexPassword.test(passwordInput.value) == true){
    passwordInput.style.background = ("green");
  } else {
    passwordInput.style.background = ("red");
  }
});

//
seConnecter.addEventListener("click", function(){
  const emailValid = regexEmail.test(emailInput.value);
  const passwordValid = regexPassword.test(passwordInput.value);
  resultInput.textContent = (emailValid && passwordValid ? "Valide" : "Veuillez entre un email et un mot de passe valide");

});


