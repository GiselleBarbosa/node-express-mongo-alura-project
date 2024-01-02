import OrderController from "../controllers/orders.controller.js";
import express from "express";

const routes = express.Router();

routes.get("/pedidos", OrderController.readOrders);
routes.get("/pedidos/:id", OrderController.readOrderByID);
routes.post("/pedidos", OrderController.createOrder);
routes.put("/pedidos", OrderController.updateOrder);
routes.delete("/pedidos/:id", OrderController.removeOrder);

export default routes;
