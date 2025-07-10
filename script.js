let botao = document.querySelector("#toggle-btn");
let body = document.querySelector("body");

function alternarModoNoturno() {
    body.classList.toggle("dark-mode");
}

botao.addEventListener("click", alternarModoNoturno);