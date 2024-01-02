import client from "../models/client.model.js";

class ClientController {
	static async readClients(req, res) {
		try {
			const list = await client.find({});
			res.status(200).json(list);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - falha na requisição`,
			});
		}
	}

	static async readClientByID(req, res) {
		try {
			const id = req.params.id;
			const clientFound = await client.findById(id);
			res.status(200).json(clientFound);
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - falha na requisição do cliente`,
			});
		}
	}

	static async createClient(req, res) {
		try {
			const newClient = await client.create(req.body);
			res.status(201).json({
				message: "cliente registrado com sucesso",
				client: newClient,
			});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - falha ao cadastrar cliente.`,
			});
		}
	}

	static async updateClient(req, res) {
		try {
			const id = req.params.id;
			await client.findByIdAndUpdate(id, req.body);
			res.status(200).json({
				message: "Cliente atualizado com sucesso.",
			});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - falha na atualização do cliente`,
			});
		}
	}

	static async removeClient(req, res) {
		try {
			const id = req.params.id;
			await client.findByIdAndDelete(id);
			res.status(200).json({
				message: "Cliente excluído com sucesso.",
			});
		} catch (error) {
			res.status(500).json({
				message: `${error.message} - falha na remoção do cliente`,
			});
		}
	}
}

export default ClientController;
