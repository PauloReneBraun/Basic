function retornarFuncao() {
    return function() {
        return function () {
            return "Boa tarde";
        }
    }
}

console.log(retornarFuncao);
console.log(retornarFuncao());
console.log(retornarFuncao()());
console.log(retornarFuncao()()());