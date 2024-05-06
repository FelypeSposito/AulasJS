let eu = "vou me matar"

console.log(eu.charAt(0)); //corta uma letra

console.log(eu.length); //conta quantas letras tem na frase, contando tambem, caracteres como o Espaço

let seila = "uma frase aleatoria de teste"

console.log(seila.substring(0,19)); //corta as letras com um tipo de coordenada, começando pelo zero

console.log(seila.length);

let naosei = seila.split(' ') //corta a string entre todos os caracteres que estejam dentro das aspas simples. Nesse caso, todo caractere de espaço entre as palavras vão ser cortadas, criando 4 splits diferentes, 

console.log(naosei[4]);// A quinta palavra da string "naosei" será cortada e exibida, ja que ela foi setada assim acima

console.log(seila.replace('aleatoria', 'muito bosta')); //Troca a palavra "aleatoria" da variavel "seila", pela frase "muito bosta"


