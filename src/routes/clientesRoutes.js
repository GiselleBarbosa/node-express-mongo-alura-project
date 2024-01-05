import ClienteController from "../controllers/cliente.controller.js";
import express from "express";

const routes = express.Router();

routes.get("/clientes", ClienteController.listarClientes);
routes.get("/clientes/busca", ClienteController.listarClientesPorNome);
routes.get("/clientes/:id", ClienteController.listarClientePorId);
routes.post("/clientes", ClienteController.criarCliente);
routes.put("/clientes/:id", ClienteController.atualizarCliente);
routes.delete("/clientes/:id", ClienteController.removerCliente);

export default routes;
