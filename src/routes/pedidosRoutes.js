import PedidoController from "../controllers/pedido.controller.js";
import express from "express";

const routes = express.Router();

routes.get("/pedidos", PedidoController.listarPedidos);
routes.get("/pedidos/:id", PedidoController.listarPedidoPorId);
routes.post("/pedidos", PedidoController.criarPedido);
routes.put("/pedidos/:id", PedidoController.atualizarPedido);
routes.delete("/pedidos/:id", PedidoController.removerPedido);

export default routes;
