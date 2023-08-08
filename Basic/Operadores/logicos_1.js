let HaveMoney = true;
let verytangled = true;
let carronthegarrage = true;

let resultE = '#1 (AND) Go to mall?' ;
resultE += HaveMoney && verytangled;
console.log(resultE);

let resultOU = '#2 - (OR) Go to mall?'
resultOU += sunnyDay || carronthegarrage;
console.log(resultOU);

console.log(true !== true);
console.log(true !== false);
console.log(false!== true);
console.log(false !== false);

console.log('Not True:' + !true);
console.log('not false:' + !false);