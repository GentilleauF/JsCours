let chessBoard = [];
let lines = [0,0,0,0,0,0,0,1];
let counter =0;


for (let i=0; i<8; i++) {
     chessBoard.push(melange(lines));   
}







//MELANGE ALEATOIRE DU TABLEAU
function melange(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]];
    }
    return [...array]
  }

  console.log(chessBoard);


// Regarde si il y a 2 reines (1) sur la même collone
  for (let i=0; i<chessBoard.length; i++){
    counter = 0;
    for (let y=0; y<chessBoard.length; y++ ){
        if (chessBoard[y][i] == 1){
            counter++
        }
    }
    
    if (counter>1){
        console.log(`ERREUR : collone ${i+1} : il y a ${counter} reines`);
    }
  }