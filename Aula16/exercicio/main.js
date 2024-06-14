let btnValidar = document.querySelector("#validar")


btnValidar.addEventListener("click", () => {
    // expressão que define que um email seja formatado como email@email.com
    let regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = document.querySelector("#emailInput").value;
    let regExPassw = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/;
    let senha = document.querySelector("#senha")

    // se passar no teste de comparação
    if (regExEmail.test(email)) {
        document.querySelector("#resultado").innerText = "E-mail válido!";
        document.querySelector("#resultado").style.color = "green";
    } else {
        document.querySelector("#resultado").innerText = "E-mail inválido!";
        document.querySelector("#resultado").style.color = "red"
    }
})


btnValidar.addEventListener("click", () => {
    // expressão que define que um email seja formatado como email@email.com
    let regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = document.querySelector("#emailInput").value;
    let regExPassw = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/;
    let senha = document.querySelector("#senha")

    // se passar no teste de comparação
    if (regExEmail.test(email)) {
        document.querySelector("#resultado").innerText = "E-mail válido!";
        document.querySelector("#resultado").style.color = "green";
    } else {
        document.querySelector("#resultado").innerText = "E-mail inválido!";
        document.querySelector("#resultado").style.color = "red"
    }
})


if (regExEmail.test(senha)) {
    document.querySelector("#resultado").innerText = "Senha correta!";
    document.querySelector("#resultado").style.color = "green";
} else {
    document.querySelector("#resultado").innerText = "Senha inválida!";
    document.querySelector("#resultado").style.color = "red"
}
