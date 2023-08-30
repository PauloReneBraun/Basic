const futuro = Date.now() + 2000;
let quatidade = 0;

while(Date.now() < futuro) {
    quatidade++;
}

console.log('Qtde: ' + quatidade) ;
