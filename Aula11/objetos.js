let celular = {
    modelo: "Iphone SE",
    bateria: "2000mah",
    ano: "2020",
    cor: "Vermelho"
}; //criação de um objeto 

class Celular {
    constructor(modelo, bateria, ano, cor) {
        this.modelo = modelo;
        this.bateria = bateria;
        this.ano = ano;
        this.cor = cor;
    }

    desbloquearCell(){
        console.log(`O celular foi desbloqueado`);
    }

} 
//criando uma classe para fazer objetos mais rapidos reutilizando codigo
let celular2 = new Celular('S23 Ultra', '5000mah', '2023', 'Preto') 

class CelularGamer extends Celular {
    constructor (modelo, bateria, ano, cor, tela, memoria){
        super(modelo, bateria, ano, cor);
        this.tela = tela
        this.memoria = memoria
    }
}

let celular3 = new CelularGamer('POCO 6Pro','5000mah', '2024', 'Cinza', '120hz', '8GB')

console.log(celular3);

class CelularPremium extends CelularGamer{
    constructor (modelo, bateria, ano, cor, tela, memoria, ssd) {
        super(modelo, bateria, ano, cor, tela, memoria);
        this.ssd = ssd;
    }
}

let celular4 = new CelularPremium('Red Magic 9 Pro', '10000mah', '2024', 'Branco', '165hz', '24GB', false)

console.log(celular4);