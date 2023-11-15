let nbrPainsAuChocolat = parseInt(prompt("Saisir un nbr"));
let price = 0;

if (nbrPainsAuChocolat <= 10) {
  price = nbrPainsAuChocolat * 1.4;
} else if (nbrPainsAuChocolat > 10 && nbrPainsAuChocolat <= 20) {
  price = 14;

  for (let i = 10; i < nbrPainsAuChocolat; i++) {
    price = price + 1.3;
  }
} else if(nbrPainsAuChocolat >20 && nbrPainsAuChocolat<100){
    price = 27;

    for (let i = 20; i < nbrPainsAuChocolat; i++) {
        price = price + 1.2;

}
}
console.log(price);
