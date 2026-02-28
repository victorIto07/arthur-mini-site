import { elementos, InserirNomeLista, MostrarCarregamento, PegarNomeInput } from "./elementos.mjs";
import { BuscarNomes, AdicionarNome } from "./services.mjs";

// evento que atualiza os nomes no HTML
export async function AtualizarNomes() {
  // mostra que a operação está sendo executada
  MostrarCarregamento();

  // busca os nomes no backend
  const nomes = await BuscarNomes();

  // limpa o HTML da lista de nomes
  elementos.listaNomes.innerHTML = "";

  // se não há nomes, mostra uma mensagem de erro
  if (nomes.length === 0) {
    console.warn("Nenhum nome encontrado");
    return;
  }

  // para cada nome, insere um novo elemento na lista de nomes
  for (const nome of nomes) {
    InserirNomeLista(nome);
  }
}

// evento que adiciona um novo no backend
export async function InserirNome() {
  // pega o nome do usuário digitado no input
  const nome = PegarNomeInput();

  // mostra que a operação está sendo executada
  MostrarCarregamento();

  // chama o serviço de adicionar nome no backend
  await AdicionarNome(nome);

  // atualiza os nomes no HTML
  await AtualizarNomes();
}

// (!!PENDENTE!!) evento que remove o nome no backend
export async function RemoverNome() {
  // pega o nome do usuário selecionado no input

  // mostra que a operação está sendo executada

  // chama o serviço de remover nome no backend

  // atualiza os nomes no HTML
}
