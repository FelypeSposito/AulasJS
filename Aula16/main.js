let botaoValidar = document.querySelector("#botaoValidar");

botaoValidar.addEventListener("click", () => {
        // expressão que define que um email seja formatado como email@email.com
        let regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let email = document.querySelector("#emailInput").value;
    
        // se passar no teste de comparação
        if (regExEmail.test(email)) {
            document.querySelector("#resultado").innerText = "E-mail válido!";
            document.querySelector("#resultado").style.color = "green";
        } else {
            document.querySelector("#resultado").innerText = "E-mail inválido!";
            document.querySelector("#resultado").style.color = "red"
        }
})
