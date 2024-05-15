let carro1 = {
    empresa: 'Fiat',
    modelo: 'Uno',
    cor: 'Branco',
    portas: 2,
    tamanho: 'Pequeno',
    configuracoes: {
        confortabilidade: 'confotabilidade relativamente baixa',
        potencia: 'Média/Alta',
        popularidade: 'Alta'
    }
}

let carro2 = {
    empresa: 'Hyundai',
    modelo: 'HB20',
    cor: 'Preto',
    portas: 4,
    tamanho: 'Médio',
    configuracoes: {
        confortabilidade: 'Confortável',
        potencia: 'Média',
        popularidade: 'Alta'
    }
}

let carro3 = {
    empresa: 'VolksWagen',
    modelo: 'Jetta',
    cor: 'Cinza',
    portas: 4,
    tamanho: 'Médio',
    configuracoes: {
        confortabilidade: 'Muito confortável, principalmente para o condutor',
        potencia: 'Alta',
        popularidade: 'Alta'
    }
}

console.log('-----');
console.log(carro1.empresa);
console.log(carro1.modelo);
console.log(carro1.tamanho);
console.log(carro1.configuracoes.confortabilidade);
console.log('-----');

console.log(carro2.empresa);
console.log(carro2.modelo);
console.log(carro2.tamanho);
console.log(carro2.configuracoes.confortabilidade);
console.log('-----');

console.log(carro3.empresa);
console.log(carro3.modelo);
console.log(carro3.tamanho);
console.log(carro3.configuracoes.confortabilidade);
console.log('-----');

let {
    empresa,
    modelo,
    cor,
} = carro1


console.log(empresa);
console.log(modelo);
console.log(cor);

console.log('-----');

let {
    portas,
    tamanho,
    configuracoes,
} = carro2

console.log(portas);
console.log(tamanho);
console.log(configuracoes.confortabilidade);
  