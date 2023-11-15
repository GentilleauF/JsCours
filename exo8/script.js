let myNumber1 =parseInt(prompt("Saisir un nbr"));
let myNumber2 =parseInt(prompt("Saisir un nbr"));
let myNumber3 =parseInt(prompt("Saisir un nbr"));
let myNumber4 =parseInt(prompt("Saisir un nbr"));

let myArray = [];
let negCounter = 0;
let posCounter = 0;

myArray.push(myNumber1);
myArray.push(myNumber2);
myArray.push(myNumber3);
myArray.push(myNumber4);

for (let i=0; i<4; i++) {
    if (myArray[i] <0) {
        negCounter++;
    } else {
        posCounter++;
    }
}

console.log("nbre positifs" + posCounter + "negatifs:" + negCounter);
let maxvalue = myArray[0];

for (let i=0; i<myArray.length; i++) {
    if (Math.abs(myArray[i] > Math.abs(maxvalue))) {
        maxvalue = Math.abs(myArray[i]);
    }
}

console.log(myArray);
console.log(maxvalue);