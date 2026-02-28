import express from "express";
import morgan from "morgan";

// inicializa o express para o servidor
const app = express();

// porta exposta para o servidor
const port = 8000;

// lista de nomes inicial
let nomes = [
  'Arthur',
  'Vitu',
  'Julis',
];

// exibe os registros de requisições no console
app.use(morgan("dev"));

// isso aqui faz com que todas as chamadas demorem 1.5 segundos antes de serem processadas (sem isso é instantâneo e nem dá pra ver o que acontece)
app.use((req, _, next) => {
  setTimeout(next, 800)
});

// ignora por agora
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

// endpoint que retorna uma mensagem de api funcionando
app.get("/", (req, res) => {
  res.json({ message: "API funcionando 🔥" });
});

// endpoint que retorna a lista de nomes
app.get("/nomes", (req, res) => {

  // transforma a lista de nomes em json e retorna pra quem chamou
  res.json({ nomes: nomes });
});

// endpoint que adiciona um nome
app.post("/nomes/adicionar/:nome", (req, res) => {
  // pega o :nome da rota da url passada
  const nome = req.params.nome;

  // verifica se o nome passado é vazio e retorna erro se for
  if (nome === "") {
    res.status(400).json({ ok: false, message: "Nome não pode ser vazio" });
  }

  // adiciona o nome passado na lista
  console.log(`Adicionando nome: ${nome}`);
  nomes.push(nome);

  // retorna sucesso pra quem chamou
  res.status(201).json({ ok: true });
});

// endpoint que remove um nome
app.delete("/nomes/remover/:nome", (req, res) => {
  const nome = req.params.nome;

  // verifica se o nome passado é vazio e retorna erro se for
  if (nome === "") {
    res.status(400).json({ ok: false, message: "Nome não pode ser vazio" });
  }

  // identifica a posição do nome na lista
  const indexNome = nomes.indexOf(nome);

  // se o nome não for encontrado retorna erro
  if (indexNome === -1) {
    res.status(404).json({ ok: false, message: "Nome não encontrado" });
  }

  // remove o nome da lista
  console.log(`Removendo nome: ${nome}`);
  nomes.splice(indexNome, 1);

  // retorna sucesso pra quem chamou
  res.status(200).json({ ok: true });
});

// inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`API iniciada em http://localhost:${port} 🔥`);
});
