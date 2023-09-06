function sempreRetornaUm() {
    return 1;
}

function TextoOuNumero(retornaTexto) {
    if(retornaTexto) {
        return "Sou um texto";
}
}

let valor = sempreRetornaUm() + 999;
console.log(valor);

let texto = TextoOuNumero(true);
console.log(texto);

console.log(TextoOuNumero(false));