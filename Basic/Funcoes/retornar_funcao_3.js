function somar1(a, b) {
    return a + b;
}

console.log(somar1(7, 9));

function somar2(a) {
    return function (b) {
        return a + b;
    }
}

console.log(somar2(7)(9));

const somarMais10 = somar2(10)

console.log(somarMais10(7));
console.log(somarMais10(15));