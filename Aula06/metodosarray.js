let numero = 15.555

console.log(numero.toFixed(1));

let n = [1, 2, 3]
console.log(typeof n); //é tipo 'objeto' por que ele está considerando a array inteira
console.log(typeof n[1]); // é tipo numérico por que está sendo feita a analise do numero dentro da array

let novosNumeros = numero.toString();//transforma a array em string
console.log(novosNumeros);
console.log(typeof novosNumeros[2]);//mostra string por causa do comando . toString


