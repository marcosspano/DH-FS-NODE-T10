let pessoa = {
    nome: 'Marcos',
    sobrenome: 'Spano',
    idade: 37,
    altura: 1.78,
    seriesFavoritas: ['Game of Thrones', 'Dr. House', 'House of Cards', 'Friends', 'Lúcifer']
}

let {nome, sobrenome, seriesFavoritas : series} = pessoa;

console.log (nome);
console.log (sobrenome);
console.log (series);

