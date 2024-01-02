import ClientController from "../controllers/clients.controller.js";
import express from "express";

const routes = express.Router();

routes.get("/clientes", ClientController.readClients);
routes.get("/clientes/:id", ClientController.readClientByID);
routes.post("/clientes", ClientController.createClient);
routes.put("/clientes", ClientController.updateClient);
routes.delete("/clientes/:id", ClientController.removeClient);

export default routes;
