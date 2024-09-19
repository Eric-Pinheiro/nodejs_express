//importando o express na aplicação
//const express = require("express");  commonJS modules
import express from "express";
import ClientesController from "./controllers/ClientesController.js";
// criando uma instancia do express
const app = express();
//definindo ejs como rendrizador de páginas
app.set("view engine", "ejs");
//definindo a pasta dos arquivos estáticos (public)
app.use(express.static("public"));

//criando a rota principal
app.get("/", function (req, res) {
  res.render("index");
});
//definindo o suo das rotas que etão nos controllers
        app.use("/", ClientesController)

//inciando um servidor na porta 8080
const port = 8080;
app.listen(8080, function (error) {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso! em; http://localhost:${port}`);
  }
});
