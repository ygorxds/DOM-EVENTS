const evento = window.document.getElementById("botao");

evento.addEventListener("click", clicar);
evento.addEventListener("mouseenter", entrar);
evento.addEventListener("mouseout", sair);

function clicar() {
  evento.innerText = "CLICOU";
  evento.style.backgroundColor = "red";
}

function entrar() {
  evento.innerText = "Entrou";
  evento.style.backgroundColor = "blue";
}
function sair() {
  evento.innerText = "Saiu";
  evento.style.backgroudcolor = "blue";
}
