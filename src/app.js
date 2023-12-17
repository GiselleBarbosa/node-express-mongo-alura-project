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

app.get("/cliente/:id", (req, res) => {
	const index = buscaClientePorID(req.params.id);
	res.status(200).json(clientes[index]);
});

app.put("/cliente/:id", (req, res) => {
	const index = buscaClientePorID(req.params.id);
	clientes[index].nome = req.body.nome;
	res.status(200).json(clientes);
});

app.delete("/cliente/:id", (req, res) => {
	const index = buscaClientePorID(req.params.id);
	clientes.splice(index, 1);
	res.status(200).send(clientes);
});

export default app;
