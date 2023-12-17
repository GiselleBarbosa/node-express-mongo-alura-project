import clientes from "./models/cliente-model.js";
import dataBaseConect from "./config/db-connect.js";
import express from "express";

const conexao = await dataBaseConect();

conexao.on("error", error => {
	console.error("Erro de conexao com MongoDB", error);
});

conexao.once("open", () => {
	console.log("A conexao com o banco de dados foi realizada com sucesso!!!");
});

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.status(200).send("Cadastro de Clientes - Pagina inicial");
});

app.get("/clientes", async (_req, res) => {
	const listaCliente = await clientes.find({});
	res.status(200).json(listaCliente);
});

app.get("/cliente/:id", (req, res) => {
	const index = buscaClientePorID(req.params.id);
	res.status(200).json(clientes[index]);
});

app.post("/cliente", (req, res) => {
	clientes.push(req.body);
	res.status(201).send("Cliente cadastrado com sucesso.");
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
