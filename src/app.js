import dataBaseConect from "./config/db-connect.js";
import express from "express";

const connection = await dataBaseConect();

connection.on("error", error => {
	console.error("Erro de conexao com MongoDB", error);
});

connection.once("open", () => {
	console.log("A conexao com o banco de dados foi realizada com sucesso!!!");
});

const app = express();

app.use(express.json());

const clientes = [
	{ id: 1, nome: "maria", idade: 56 },
	{ id: 2, nome: "jose", idade: 35 },
	{ id: 3, nome: "joaozinho", idade: 8 },
];

function buscaClientePorID(id) {
	return clientes.findIndex(cliente => {
		return cliente.id === Number(id);
	});
}

app.get("/", (req, res) => {
	res.status(200).send("Cadastro de Clientes - Pagina inicial");
});

app.get("/clientes", (req, res) => {
	res.status(200).json(clientes);
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
