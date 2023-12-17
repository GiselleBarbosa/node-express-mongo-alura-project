import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
	{
		id: { type: mongoose.Types.ObjectId },
		nome: { type: String, required: true },
		idade: { type: Number },
		email: { type: String },
		telefone: { type: String },
	},
	{ versionKey: false }
);

const clientes = mongoose.model("clientes", clienteSchema);

export default clientes;
