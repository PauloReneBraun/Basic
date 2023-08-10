const t1 = true;
const t2 = true;

let buyTv50
console.log('vamos comprar a TV 50"?', ); //AND
console.log('vamos comprar a TV 32"?', t1 !== t2); // XOR

let tomarSorvete = t1 || t2;
console.log('Vamos comprar sorvete?', tomarSorvete); // OR

let ficarEmCasa = !tomarSorvete;
console.log('vamosficar em casa?', ficarEmCasa); //NOT