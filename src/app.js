import express from "express";

const app = express();

const clientes = [
	{ id: 1, nome: "maria", idade: 56 },
	{ id: 2, nome: "jose", idade: 35 },
	{ id: 3, nome: "joaozinho", idade: 8 },
];

app.get("/", (req, res) => {
	res.status(200).send("Cadastro de Clientes - Pagina inicial");
});

app.get("/clientes", (req, res) => {
	res.status(200).json(clientes);
});

export default app;
