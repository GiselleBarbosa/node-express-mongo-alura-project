import cliente from "../models/cliente.js";
import { pedido } from "../models/pedido.js";

class ClienteController {
	static async listarClientes(req, res) {
		try {
			const list = await cliente.find({});
			res.status(200).json(list);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - falha na requisição`,
			});
		}
	}

	static async listarClientePorId(req, res) {
		try {
			const id = req.params.id;
			const clientFound = await cliente.findById(id);
			res.status(200).json(clientFound);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - falha na requisição do cliente`,
			});
		}
	}

	static async criarCliente(req, res) {
		const novoCliente = req.body;
		try {
			const pedidoEncontrado = await pedido.findById(novoCliente.pedido);
			const clienteCompleto = {
				...novoCliente,
				pedido: { ...pedidoEncontrado },
			};
			const clienteCriado = await cliente.create(clienteCompleto);
			res
				.status(201)
				.json({ message: "criado com sucesso", cliente: clienteCriado });
		} catch (erro) {
			res
				.status(500)
				.json({ message: `${erro.message} - falha ao cadastrar cliente` });
		}
	}

	static async atualizarCliente(req, res) {
		try {
			const id = req.params.id;
			await cliente.findByIdAndUpdate(id, req.body);
			res.status(200).json({
				message: "Cliente atualizado com sucesso.",
				cliente,
			});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - falha na atualização do cliente`,
			});
		}
	}

	static async removerCliente(req, res) {
		try {
			const id = req.params.id;
			await cliente.findByIdAndDelete(id);
			res.status(200).json({
				message: "Cliente excluído com sucesso.",
			});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - falha na remoção do cliente`,
			});
		}
	}

	static async listarClientesPorNome(req, res) {
		const nome = req.query.nome;
		try {
			const clientesPorNome = await cliente.find({ nome: nome });
			res.status(200).json(clientesPorNome);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - falha na busca do cliente`,
			});
		}
	}
}

export default ClienteController;
