import mongoose from "mongoose";
import { pedidoSchema } from "./pedido.js";

const clienteSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  email: { type: String },
  telefone: { type: String },
  pedido: pedidoSchema,
},{ versionKey: false });

const cliente = mongoose.model("clientes", clienteSchema);

export default cliente;
