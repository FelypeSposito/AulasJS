class Carro {
    constructor(marca, modelo, cor, ano) {
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
        this.ano = ano
    }

    modeloCarro() {
        console.log(`O modelo do carro é: ${this.modelo}.`);
    }

    somDaBuzina(){
        return `biiiiiiibiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii`
    }

}

let carro1 = new Carro('Volkswagen', 'Jetta', 'Preto', 2011)

let carro2 = new Carro('Hyundai', 'HB20', 'Branco', 2017)

console.log(carro1.somDaBuzina());

console.log("----------");

console.log(carro2, carro2.modeloCarro());

