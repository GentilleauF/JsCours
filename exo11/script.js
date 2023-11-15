let startGame = document.getElementById('start-game');
let resultDice = document.getElementById('result-dice');
let playGameBtn = startGame.addEventListener("click", playGame);

  scoreBanque = 0;
  scoreJoueur = 0;
  desBanque = playGame()
  desJoueur = playGame()

    
  resultDice.innerText = `Banque: ${desBanque},  Joueur: ${desJoueur}`

  if (desJoueur<desBanque) {
    scoreJoueur++;
  } else if  (desJoueur == desBanque) {
    scoreJoueur +=2;
  } else {
    scoreBanque++;
  }

if(scoreJoueur>scoreBanque) {
  console.log(`le joueur a gagné ${scoreJoueur} à ${scoreBanque}`);
} else {
  console.log(`la banque a gagné ${scoreBanque} à ${scoreJoueur}`);
}

function playGame() {
   return Math.floor(Math.random() * 6 ) +1;
  }
