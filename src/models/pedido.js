import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  vendedor: { type: String, required: true },
  loja: { type: String },
  valorPedido: { type: Number },
},{ versionKey: false });

const pedido = mongoose.model("pedidos", pedidoSchema);

export { pedido, pedidoSchema };
