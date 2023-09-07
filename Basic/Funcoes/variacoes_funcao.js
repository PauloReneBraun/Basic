// #1 FUNÇÃO COM PARÂMETRO E COM RETORNO 
function somar(a, b) {
    return a + b;
}

let resultado = somar(30, 89);
console.log(resultado);
console.log(somar(30, 89));

// #2: FUNÇÃO COM PARAMETRO SEM RETORNO
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}

exibirMultiplicacao(10,49)
exibirMultiplicacao(9, 30)

// #2 FUNÇÃO SEM PARÂMETROS E COM RETORNO 
function retornarDataAtual() {
    return Date.now();
}

console.log(retornarDataAtual());

// #4 FUNÇÃO SEM PARÂMETROS E SEM RETORNO
function exibirHoraAtual() {
    console.log(new Date().getHours())
}

exibirHoraAtual();