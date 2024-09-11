//importando o express na aplicação
const express = require("express"); // commonJS modules
// criando uma instancia do express
const app = express();
//criando a rota principal
app.get("/", function (req, res) {
  res.send("Hello world! Bem-vindo!");
});
app.get("/perfil/:nome?", function (req, res) {
  const nome = req.params.nome;
  if (nome) {
    res.send(`Olá ${nome}! Seja bem vindo`);
  } else {
    res.send(`Faça Login para acessar o seu perfil`);
  }
});
app.get("/videos/:playlist?/:videos?", (req, res) => {
  const playlist = req.params.playlist;
  const videos = req.params.videos;
  if (playlist && videos == undefined) {
    res.send(`Você está na playlist ${playlist}`);
  }
  if (playlist && videos) {
    res.send(
      `Você está na playlist ${playlist} reproduzindo o video ${videos}`
    );
  } else {
    res.send(`Pagina de vídeos`);
  }
});
//inciando um servidor na porta 8080

app.listen(8080, function (error) {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
