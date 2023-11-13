
let mot1 = prompt("Saisir le mot 1");
let mot2 = prompt("Saisir le mot 2");
let mot3 =prompt("Saisir le mot 3");

if (mot1.localeCompare(mot2) <= -1 && mot2.localeCompare(mot3) <= -1 ) {
        console.log("Les mots sonts dans le bon ordre alphabétique");
     } else {console.log("pas dans l'ordre alphabétiquea");}



// 2eme méthodea
console.log("2eme méthode");
let myArray = [];
myArray.push(mot1);
myArray.push(mot2);
myArray.push(mot3);

let myNewArray = [...myArray].sort()
console.log(myArray);
console.log(myNewArray);

if(myArray.join() === myNewArray.join()){
    console.log('ok');
}else{
    console.log('pas ok');
}


