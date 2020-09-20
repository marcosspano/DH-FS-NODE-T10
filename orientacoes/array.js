let pessoa = ["Marcos", 37, 1.78, ["Música", "Comer"], "Marcos"];
console.log (pessoa [3]);

//push - Adiciona na ultima posição do array
pessoa.push("Anna");
console.log (pessoa);

//pop - Exclui a última posição do array
pessoa.pop();
console.log (pessoa);

//unshift - Adiciona na primeira posição do array
pessoa.unshift ("Anna");
console.log (pessoa);

//shift - Exclui a primeira posição do array
pessoa.shift();
console.log (pessoa);

//indexOf - Retorna a primeira posição do dado do array
console.log (pessoa.indexOf(1.78));

//lastIndexOf - Retorna a última posição do dado do array
console.log (pessoa.lastIndexOf("Marcos"));

//includes - Retorna Booleano na busca do dado no array
console.log (pessoa.includes("Marcos"));

//join - Unifica os dados de um array e retorna uma string
console.log (pessoa.join(" "));


//callbacks:

//map - mapeia um a um
let numeros = [2, 4, 6];
let dobroNumeros = numeros.map(function(umNumero){
    return umNumero * 2;
});
console.log (dobroNumeros);

//filter - Retorna valores condicionados no parâmetro
let idades = [15, 39, 18, 23, 10];
let maiores = idades.filter(function(umaIdade){
    return umaIdade >= 18;
});
console.log (maiores);

//reduce - Soma todas os valores do array
//Variável criada anteriormente
let resultado = numeros.reduce(function(acumulador, umNumero){
    return acumulador + umNumero;
});
console.log (resultado);

//forEach - Não retorna, apenas age no array
let paises = ["Brasil", "França", "Italia", "Alemanha", "Inglaterra"];
paises.forEach(function(umPais){
    console.log (umPais);
});

//find
var frutas = ["Uva", "Abacaxi", "Maçã", "Cereja", "Morango", "Abacaxi"];
var moraNoMar = frutas.find (function(fruta){
    return fruta == "Abacaxi";
});
console.log (moraNoMar);



