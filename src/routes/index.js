import clientes from "./clientsRoutes.js";
import express from "express";

const routes = (app) => {
	app
		.route("/")
		.get((req, res) =>
			res.status(200).send("Registro de clientes")
		);

	app.use(express.json(), clientes);
};

export default routes;
