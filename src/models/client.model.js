import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
	{
		id: { type: mongoose.Types.ObjectId },
		nome: { type: String, required: true },
		idade: { type: Number },
		email: { type: String },
		telefone: { type: String },
	},
	{ versionKey: false }
);

const client = mongoose.model("clientes", clientSchema);

export default client;
