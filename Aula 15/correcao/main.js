let imgCookie = document.querySelector("#cookieFeio");

let contador = document.querySelector("contador");

let pontuacao = 0;

imgCookie.addEventListener("click", () => {
    pontuacao++;
    contador.innerHTML = `Contador: ${pontuacao}`
})

console.log(imgCookie);

