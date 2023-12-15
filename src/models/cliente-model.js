import mongoose, { Schema } from "mongoose";

const clienteSchemas = new mongoose.Schema(
	{
		id: { type: mongoose.Types.ObjectId },
		nome: { type: String, required: true },
		idade: { type: Number },
		email: { type: String },
		telefone: { type: String },
	},
	{ versionKey: false }
);

const cliente = mongoose.model("clientes", clienteSchemas);

export default cliente;
