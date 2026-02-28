// serviço que busca os nomes no backend
export async function BuscarNomes() {
  try {
    // faz uma requisição GET para /nomes no backend
    const res = await fetch("http://localhost:8000/nomes", {
      method: "GET",
    });

    // lê o resultado da requisição e converte para JSON
    const resposta = await res.json();

    // verifica se a requisição foi bem sucedida
    if (res.status !== 200) {
      // se não, mostra uma mensagem de erro e retorna uma lista vazia
      console.error("Erro ao buscar nomes:", resposta);
      return [];
    }

    // retorna a lista de nomes
    return resposta.nomes;
  } catch (erro) {
    // se ocorrer um erro, mostra uma mensagem de erro e retorna uma lista vazia
    console.error("Erro de rede ao buscar nomes:", erro);
    return [];
  }
}

// serviço que adiciona um novo nome no backend
export async function AdicionarNome(nome) {
  // se o nome for vazio, retorna
  if (nome === "") {
    return;
  }

  try {
    // transforma o nome em URL-codificado (para evitar erros de URL)
    const nomeCodificado = encodeURIComponent(nome);

    // faz uma requisição POST para /nomes/adicionar/{nome} no backend
    const res = await fetch(`http://localhost:8000/nomes/adicionar/${nomeCodificado}`, {
      method: "POST",
    });

    // lê o resultado da requisição e converte para JSON
    const resposta = await res.json();

    // verifica se a requisição foi bem sucedida
    if (res.status !== 201) {
      console.error("Erro ao adicionar nome:", resposta);
    }
  } catch (erro) {
    console.error("Erro de rede ao adicionar nome:", erro);
  }
}
