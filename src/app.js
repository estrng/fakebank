const express = require("express");
const App = express();
//const db = require("./database/db.json");

App.use(express.json()); // Para dizermos ao server que utilizaremos JSON como comunicação de tranfers de dados.

App.get("/", (req, res) =>
  res.json("Olá fucking world, i will kill everybody")
);

module.exports = App;
