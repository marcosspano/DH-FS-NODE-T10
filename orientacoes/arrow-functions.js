let saudar = () => console.log ('Olá');
saudar();

let dobroDe = (numero = 2) => numero * 2;
console.log (dobroDe(10));

let horaAtual = () => {
    let data = new Date();
    return data.getHours() + ':' + data.getMinutes();
}

console.log (horaAtual());