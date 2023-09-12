// FUNÇÃO CONSTRUTORA (CLASSE) - > OBJETO
function Data(dia = 1, mes = 1, ano = 2023) {
    this.dia = dia;
    this.mes = mes;
    this.ano - ano;

    this.exibir = function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

const d1 = new Data();
const d2 = new Data(24, 11, 2021);
const d3 = new Data(12, 10, 2022);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());

console.lof(d1);
console.lof(d2);
console.lof(d3);