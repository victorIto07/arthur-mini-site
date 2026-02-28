import { CarregarElementos } from "./elementos.mjs";
import { AtualizarNomes } from "./eventos.mjs";

// serve pra iniciar a rodar o código só quando todos os elementos do HTML já tiverem sido carregados
document.addEventListener("DOMContentLoaded", () => {
  // carrega os elementos do HTML (botões, lista de nomes, etc)
  CarregarElementos();

  // inicia a chamada para buscar os nomes no backend
  AtualizarNomes();
});
