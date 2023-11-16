let btnJeu = document.querySelectorAll("#btn-jeu");
let resultScreen = document.getElementById("screen-resultat");
let victoryScreen = document.getElementById("victory");
let looseScreen = document.getElementById("loose");
let equalityScreen = document.getElementById("equality");
let choixAdversaire = ["Pierre", "Feuille", "Ciseaux"];
let victory = 0;
let loose = 0;
let equality = 0;


btnJeu.forEach((element) => {
  element.addEventListener("click", startGame);
})

function startGame(e) {

  let monSigne = e.target.innerText;
  let chiffreAleatoire = Math.floor(Math.random()*3);
  let signeAdversaire = choixAdversaire[chiffreAleatoire];
  console.log(monSigne + " VS " + signeAdversaire);
  
  if(monSigne === signeAdversaire){
    resultScreen.innerText = `${monSigne} VS ${signeAdversaire}! C'est une égalitée!!`;
    equality++; 
    equalityScreen.innerText ="Egalité: " + equality;
  } else if(monSigne === "Pierre" && signeAdversaire == "Ciseaux" ||
            monSigne === "Feuille" && signeAdversaire == "Pierre" ||
            monSigne === "Ciseaux" && signeAdversaire == "Feuille" ) 
            { victory++;
              victoryScreen.innerText ="Victoire: " + victory;
              resultScreen.innerText = `${monSigne} VS ${signeAdversaire}! Vous avez gagné!!`;

          
  } else {
    resultScreen.innerText = `${monSigne} VS ${signeAdversaire}! L'adversaire a gagné!!`;
    loose++;
    looseScreen.innerText = "Defaite: " + loose;
  }


  if(victory == 3){
    alert("vous avez gagné " + victory + " à " + loose);
    victory = 0;
    loose = 0;
    equality = 0;
    victoryScreen.innerText ="Victoire: 0";
    looseScreen.innerText ="Défaite: 0";
    equalityScreen.innerText ="Egalité: 0";
  }

  if(loose == 3){
    alert("Vous avez Perdu " + loose + " à " + victory);
    victory = 0;
    loose = 0;
    equality = 0;
    victoryScreen.innerText ="Victoire: 0";
    looseScreen.innerText ="Défaite: 0";
    equalityScreen.innerText ="Egalité: 0";
  }
}