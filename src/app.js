import dataBaseConect from "./config/db-connect.js";
import express from "express";
import routes from "./routes/index.js";

const conexao = await dataBaseConect();

conexao.on("error", error => {
  console.error("Erro de conexao com MongoDB", error);
});

conexao.once("open", () => {
  console.log("A conexao com o banco de dados foi realizada com sucesso!!!");
});

const app = express();
routes(app);

export default app;
