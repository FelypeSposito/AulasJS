let grupo1 = ['Derick', 'Davi', 'Sarah', 'Fernando', 'Fernanda']

console.log(grupo1[3]);

const grupo2 = new Array("Maju", "Felype", "Vivi", "Daniel", "Juan")

console.log(grupo2[2]);
console.log(typeof grupo2);

const grupo3 = ['Alice', 'Gustavo', 'Leslie','Isa']
console.log(grupo3[2]);

const grupo4 = ['César', 'Luigi', 'Junior']

const grupoTCC = [
    ['Derick', 'Davi', 'Sarah', 'Fernando', 'Fernanda'],
    ["Maju", "Felype", "Vivi", "Daniel", "Juan"],
    ['Alice', 'Gustavo', 'Leslie','Isa'],
    ['César', 'Luigi', 'Junior']
]

console.log(grupoTCC[2][3]);


let nome = 'Willlian' //variável do nome que vai substituir 

grupoTCC[0][3] = nome; //troca o Fernando na posição [0][3] para Willian, por causa do nome da variavel acima.

console.log(grupoTCC);