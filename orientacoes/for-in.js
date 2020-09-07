let carro = {
    marca: 'Renault',
    modelo: 'Sandero',
    ano: 2016,
    cor: 'branco'
}


//Funciona apenas com Objetos Literais
for (let propriedade in carro) {
    console.log (propriedade + ': ' + carro[propriedade]);
}

