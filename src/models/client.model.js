import mongoose from "mongoose";
import { orderSchema } from "./order.model.js";

const clientSchema = new mongoose.Schema(
	{
		id: { type: mongoose.Types.ObjectId },
		nome: { type: String, required: true },
		idade: { type: Number },
		email: { type: String },
		telefone: { type: String },
		pedido: orderSchema,
	},
	{ versionKey: false });

const client = mongoose.model("clientes", clientSchema);

export default client;
