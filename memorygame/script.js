let startGame = document.getElementById('start');



//initialtime
let minutes = 0;
let seconds = 0;

let cards = ["A","B","C","D","E","F","H","I","J","K"];

function timeGenerator() {
  seconds +=1;
  if(seconds == 60){
    minutes++;
    seconds = 0;
  }

  let secondsValue = seconds <10 ? `0${seconds} `: seconds;
  let minutesValue = minutes <10 ? `0${seconds}` : minutes;
}