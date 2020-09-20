let somar = (n1, n2) => n1 + n2;
let subtrair = (n1, n2) => n1 - n2;

let operacaoMatematica = (n1, n2, operacao) => operacao(n1, n2);

console.log (operacaoMatematica (10, 5, somar)); //Também podendo passar o parâmetro como arrow function

let meuCallBack = () => console.log ('Olá');
setTimeout (meuCallBack, 1000);

