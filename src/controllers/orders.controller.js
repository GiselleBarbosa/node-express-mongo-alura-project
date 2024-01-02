import { order } from "../models/order.model.js";

class OrderController {
	static async readOrders(req, res) {
		try {
			const list = await order.find({});
			res.status(200).json(list);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - falha na requisição`,
			});
		}
	}

	static async readOrderByID(req, res) {
		try {
			const id = req.params.id;
			const orderFound = await order.findById(id);
			res.status(200).json(orderFound);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - falha na requisição do pedido`,
			});
		}
	}

	static async createOrder(req, res) {
		try {
			const newOrder = await order.create(req.body);
			res.status(201).json({
				message: "pedido registrado com sucesso",
				order: newOrder,
			});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - falha ao cadastrar pedido.`,
			});
		}
	}

	static async updateOrder(req, res) {
		try {
			const id = req.params.id;
			await order.findByIdAndUpdate(id, req.body);
			res.status(200).json({
				message: "pedido atualizado com sucesso.",
			});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - falha na atualização do pedido`,
			});
		}
	}

	static async removeOrder(req, res) {
		try {
			const id = req.params.id;
			await order.findByIdAndDelete(id);
			res.status(200).json({
				message: "pedido excluído com sucesso.",
			});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - falha na remoção do pedido`,
			});
		}
	}
}

export default OrderController;
