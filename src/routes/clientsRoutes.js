import ClientController from "../controllers/clients.controller.js";
import express from "express";

const routes = express.Router();

routes.get("/clientes", ClientController.getClients);

export default routes;
