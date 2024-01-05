import clientes from "./clientesRoutes.js";
import express from "express";
import pedidos from "./pedidosRoutes.js";

const routes = app => {
	app.route("/").get((req, res) => res.status(200).send("Registro de clientes"));

	app.use(express.json(), clientes, pedidos);
};

export default routes;
