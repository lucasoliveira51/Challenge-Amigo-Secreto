// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let listaAmigos = document.getElementById("listaAmigos");
let NomeSorteado = document.getElementById("resultado");

function adicionarAmigo() {
  let captura = document.getElementById("amigo").value;

  if (!captura) {
    alert("Por favor, insira um nome :D");
    return;
  }

  amigos.push(captura);
  atualizarLista();
  limparCampo();
}

function atualizarLista() {
  listaAmigos.innerHTML = "";

  for (let nome of amigos) {
    let nomeMostrar = document.createElement("li");
    nomeMostrar.innerHTML = nome;
    listaAmigos.appendChild(nomeMostrar);
  }
}

function limparCampo() {
  document.getElementById("amigo").value = "";
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Sem amigos para realizar o sorteio");
  } else {
    let indice = Math.floor(Math.random() * amigos.length);
    let nomeSelecionado = amigos[indice];
    let MostrarSorteado = document.createElement("li");
    MostrarSorteado.innerHTML = nomeSelecionado;
    NomeSorteado.appendChild(MostrarSorteado);
  }
}
