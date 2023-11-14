
let productName = prompt("Saisir le nom");
let price = parseInt(prompt("Saisir le prix HT"));
let quantity =parseInt(prompt("Saisir la qtt"));

let myArray = [];

myArray.push(productName);
myArray.push(price);
myArray.push(quantity);


console.log(`Le prix TTC de ${productName} est de ${price * 1.2 * quantity} `);




