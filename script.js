let botao = document.querySelector("#toggle-btn");
let body = document.querySelector("body");
let contador = document.querySelector(".contador");

let contadorValor = 0;

function alternarModoNoturno() {
    body.classList.toggle("dark-mode");

    contadorValor++;
    contador.textContent = "Contador: " + contadorValor;
}

botao.addEventListener("click", alternarModoNoturno);

for (let i = 0; i < 100; i++) {
    let paragrafo = document.createElement("p");
    paragrafo.textContent = "Parágrafo " + (i + 1);
    body.appendChild(paragrafo);
}