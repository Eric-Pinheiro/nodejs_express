const express = require("express");
const { Socket } = require("socket.io");
const app = express();

const http = require("http").createServer(app);

const io = require("socket.io")(http);

io.on("connection", (socket) => {
  socket.on("join", (data) => {
    console.log(`${data.nickname} entrou no chat`);
    io.emit("join", data);
  });
  socket.on("msg", (data) => {
    console.log(data);
    io.emit("showMsg", data);
  });
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

const port = 8080;
const host = "0.0.0.0";
http.listen(port,host, () => {
  console.log(`aplicação rodando em http://localhost:${port}`);
});
// ele é jack
