//importando o express na aplicação
const express = require("express"); // commonJS modules
// criando uma instancia do express
const app = express();
//definindo ejs como rendrizador de páginas
app.set('view engine', 'ejs')
//criando a rota principal
app.get("/", function (req, res) {
  res.render("index")
});
app.get("/perfil/:nome?", function (req, res) {
  const nome = req.params.nome; // if (nome) {//   res.send(`Olá ${nome}! Seja bem vindo`);// } else {//   res.send(`Faça Login para acessar o seu perfil`);// }
 res.render("perfil")
});
app.get("/videos", (req, res) => {
 res.render("videos")
  // const playlist = req.params.playlist;// const videos = req.params.videos;// if (playlist && videos == undefined) {//   res.send(`Você está na playlist ${playlist}`);// }// if (playlist && videos) {//   res.send(//     `Você está na playlist ${playlist} reproduzindo o video ${videos}`//   ); // } else { //   res.send(`Pagina de vídeos`);
  // }
});
app.get("/produtos/:produto?", function(req,res){
  const listaProdutos = ['computador', 'celular', 'tablet', 'notebook']
const produto = req.params.produto
  res.render("produtos", {produto : produto, listaProdutos : listaProdutos})



})
//inciando um servidor na porta 8080

app.listen(8080, function (error) {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
