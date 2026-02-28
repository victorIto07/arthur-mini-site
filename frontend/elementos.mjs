import { AtualizarNomes, InserirNome, RemoverNome } from "./eventos.mjs";

// objeto que guarda todos os elementos do HTML que nós precisamos para interagir com o frontend
// todos estão como null porque nós não sabemos se eles existem ou não
export const elementos = {
  input: null,
  botaoAtualizar: null,
  botaoAdicionar: null,
  botaoRemover: null,
  listaNomes: null,
};

// carrega todos os elementos do HTML que nós precisamos para interagir com o frontend
export function CarregarElementos() {
  // pega o elemento do HTML com base no id="..." do elemento
  elementos.input = document.getElementById("input");
  if (elementos.input === null) {
    // avisa que o elemento não foi encontrado
    console.error("input não encontrado");
  }

  elementos.botaoAtualizar = document.getElementById("btn-update");
  if (elementos.botaoAtualizar === null) {
    console.error("botaoAtualizar não encontrado");
  }

  elementos.botaoAdicionar = document.getElementById("btn-add");
  if (elementos.botaoAdicionar === null) {
    console.error("botaoAdicionar não encontrado");
  }

  elementos.botaoRemover = document.getElementById("btn-remove");
  if (elementos.botaoRemover === null) {
    console.error("botaoRemover não encontrado");
  }

  elementos.listaNomes = document.getElementById("nomes");
  if (elementos.listaNomes === null) {
    console.error("nomes não encontrado");
  }

  // agora, com os elementos carregados, vamos iniciar a ligação dos eventos
  CarregarListeners();
}

// vincula ações no HTML com as funções do JS
function CarregarListeners() {
  // verifica se o elemento existe
  if (elementos.botaoAtualizar !== null) {
    // faz com que a função "AtualizarNomes" seja chamada quando o botão "botaoAtualizar" for clicado
    elementos.botaoAtualizar.addEventListener("click", AtualizarNomes);
  }

  if (elementos.botaoAdicionar !== null) {
    // faz com que a função "InserirNome" seja chamada quando o botão "botaoAdicionar" for clicado
    elementos.botaoAdicionar.addEventListener("click", InserirNome);
  }

  if (elementos.botaoRemover !== null) {
    // faz com que a função "RemoverNome" seja chamada quando o botão "botaoRemover" for clicado
    elementos.botaoRemover.addEventListener("click", RemoverNome);
  }
}

// insere um novo elemento na lista de nomes conforme o nome passado
export function InserirNomeLista(nome) {
  // cria um novo elemento <li> vazio
  const li = document.createElement("li");

  // insere o nome passado no elemento <li>
  li.innerText = nome;

  // adiciona o novo elemento à lista de nomes
  elementos.listaNomes.appendChild(li);
}

// utiliza a funcionalidade de inserir nomes no HTML para mostrar que alguma operação está sendo executada
export function MostrarCarregamento() {
  // esta linha limpa o conteúdo do HTML da lista de nomes
  elementos.listaNomes.innerHTML = "";

  InserirNomeLista("Buscando...");
}

// pega o nme do usuário digitado no input e limpa o input
export function PegarNomeInput() {
  // pega o nome do usuário digitado no input
  const nome = elementos.input.value;

  // limpa o input
  elementos.input.value = "";

  // retorna o nome
  return nome;
}
