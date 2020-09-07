// let texto = "abc";
// let numero = 1;
// console.log (typeof(numero));

let texto = "5abc";
console.log (parseInt(texto)); //5 - Os caracteres string devem estar a direita do número para funcionar

let texto2 = "5abc";
console.log (Number(texto2)); //NaN

let numero = 111;
let texto3 = String(numero);
console.log (typeof(texto3)); //String

let texto4 = "12.9e";
console.log (parseFloat(texto4)); //12.9 - Os caracteres string devem estar a direita do número para funcionar

//Sintaxe diferente
let texto5 = numero.toString();
console.log (typeof (texto5));

