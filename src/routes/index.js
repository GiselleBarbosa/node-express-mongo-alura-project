import clientes from "./clientsRoutes.js";
import express from "express";
import pedidos from "./ordersRoutes.js";

const routes = app => {
	app
		.route("/")
		.get((req, res) => res.status(200).send("Registro de clientes"));

	app.use(express.json(), clientes, pedidos);
};

export default routes;
