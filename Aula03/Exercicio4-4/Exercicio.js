alert("Aqui nós faremos o calculo do seu IMC (Indice de Massa Corporal). Para isso, digite as seguintes informações")

let altura = Number(prompt("Qual a sua altura em metros?"))

let peso = Number(prompt("Qual o seu peso em kg?"))

let imc = peso / (altura*2)

alert(imc.toFixed(2))


