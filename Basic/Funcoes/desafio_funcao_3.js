const nota2 = 9.6;
const nota1 = 4.8;
const nota3 = 5.2;

function minimo(n1, n2) {
    return n1 <= n2 ? n1: n2;
}

function media(n1, n2 , n3) {
    const menorNota = minimo(n1, minimo(n2, n3));

    if(menorNota === n1) {
        return (n2 +n3) / 2;
    } else if (menorNota === n2) {
        return (n1 + n3) / 2;
    } else {
        return (n1 + n2) / 2;
    }
}

console.log();