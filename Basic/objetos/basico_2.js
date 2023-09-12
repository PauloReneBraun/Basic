const produto = {
    nome: 'Tablet',
    preco: 2300,
    desconto: 0.25,
    precoComDesconto: function() {
        return this.preco * (1 - this.desconto)
    }
};

console.log(produto.nome);
console.log(produto.precoComDesconto());