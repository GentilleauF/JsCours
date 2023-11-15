const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let calcul = 0;

for (let i=0; i<ages.length; i++) {
    calcul += ages[i];
}

let moyenne = calcul / ages.length

console.log(moyenne);