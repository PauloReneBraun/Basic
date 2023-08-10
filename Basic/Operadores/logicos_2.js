const t1 = true;
const t2 = true;

let buyTv50 = t1 && t2; // AND
console.log('vamos comprar a TV 50"?', );

let buyTv32 = t1 !== t2; //XOR
console.log('vamos comprar a TV 32"?', t1 !== t2); 

let tomarSorvete = t1 || t2; // OR
console.log('Vamos comprar sorvete?', tomarSorvete); 

let ficarEmCasa = !tomarSorvete; //NOT
console.log('vamosficar em casa?', ficarEmCasa); 