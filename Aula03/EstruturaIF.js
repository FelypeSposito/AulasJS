
// Aluno com a média >= 9 Ap. mérito estudantil.

// === valor e tipo de dado igual.
// == igual 
// = atribuição
// !=  diferente

// let media1 = 8
// let media2 = "8"
// console.log(media1 === media2);
// o Valor é considerado falso por que um é tipo string e o outro é tipo númerico

// let media3 = 6
// let media4 = 6
// console.log(media3 == media4);
// O valor é considerado verdadeiro por que os dois são o mesmo valor, pois foi indicado que media3 e media4 são iguais.




// if (media <= 5) {
//     console.log('se for falso, não funciona');
// }


// if (media >= 7) {
//     console.log("aluno aprovado");
// } else{
//     console.log("aluno reprovado");
// }

// console.log("Fim.");

let media = 6.5

if (media >= 7) {
    console.log(`Aluno Aprovado`);
} else if (media >= 6) {
    console.log(`Aluno Aprovado por conselho`);
} else {
    console.log(`Aluno Reprovado`);
}