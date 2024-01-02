import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
	{
		id: { type: mongoose.Schema.Types.ObjectId },
		vendedor: { type: String, required: true },
		loja: { type: String },
		data: { type: String },
		valor_pedido: { type: Number },
	},
	{ versionKey: false }
);

const order = mongoose.model("pedidos", orderSchema);

export { order, orderSchema };
