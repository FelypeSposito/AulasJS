let jogos = ['Outer Wilds', 'Cod', 'Valorant']
console.log(jogos);
console.log(jogos[0]);

const grupoObjetos = [
    ['Teclado', 'Monitor', 'Mouse'],
    ['Telefone', 'Carregador', 'Fone'],
    ['Uniforme', 'Crachá', 'Roupas']]

console.log(grupoObjetos);
console.log(grupoObjetos[1][2]);

let nome1 = 'DDD'
let nome2 = 'EEE'
let nome3 = 'FFF'
let nome4 = 'AAA'
let nome5 = 'BBB'
let nome6 = 'CCC'

grupoObjetos[1][0] = nome4
grupoObjetos[0][1] = nome5
grupoObjetos[2][2] = nome6

console.log(grupoObjetos);

let guardando1 = nome1;
let guardando2 = nome2;
let guardando3 = nome3;

console.log(guardando1, guardando2, guardando3);