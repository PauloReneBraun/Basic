// Objeto Data
// Atributos: dia, mes e Ano
// Método: exibir - > "dia/mes/ano"

const nascimento = {
    dia: 25,
    mes: 5,
    ano: 2003,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

nascimento.dia = 11;

console.log(nascimento.mes);
console.log(nascimento.exibir());