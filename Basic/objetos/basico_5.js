const cliente = {
    codigo: 12367,
    nome: 'Marcia',
    vip: true,
    endereco: {
        logradouro: 'Rua Pao',
        numero: 71,
        complemento: 'Apto 65 bloco C',
        pontosRef: [
            {nome: 'Mercado B', muitoProximo: true},
            {nome: 'Escola L', muitoProximo: false},
        ]
    },
    nomeFilhos: ['Bia', 'Carlos', 'Gabriel']
};

console.log(cliente['endereco']['logradouro']);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[0].muitoProximo);