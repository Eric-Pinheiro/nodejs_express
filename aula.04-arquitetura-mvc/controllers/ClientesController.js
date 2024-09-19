import express from "express";
const router = express.Router();

router.get("/Clientes", (req, res) => {
  const clientes = [
    {
      nome: "Eric",
      cpf: "123123123-23",
      endereco: "rua sao caxias n°78, jardim belas artes - SP",
    },
    {
      nome: "Chicão",
      cpf: "123123123-23",
      endereco: "rua sao caxias n°78, jardim belas artes - SP",
    },
    {
      nome: "Lucas",
      cpf: "123123123-23",
      endereco: "rua sao caxias n°78, jardim belas artes - SP",
    },
    {
      nome: "Flavio",
      cpf: "123123123-23",
      endereco: "rua sao caxias n°78, jardim belas artes - SP",
    },
  ];
  res.render("Clientes", { clientes: clientes });
});

export default router;
