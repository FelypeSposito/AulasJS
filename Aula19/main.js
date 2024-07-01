let variavel = "https://dog.ceo/api/breeds/image/random"

let apiCachorro = fetch((variavel),{method: 'GET', })
.then((response) => response.json())
.then((errinho) => {
    if (errinho.code === 404) {
        console.log("Sinto muito, Não conseguimos achar nada.");
    } else{
        console.log(`A: ${variavel}`);
    }
})
