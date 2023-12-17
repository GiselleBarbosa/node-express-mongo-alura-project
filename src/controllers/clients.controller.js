import client from "../models/client.model.js";

class ClientController {
	static async getClients(req, res) {
		const list = await client.find({});
		res.status(200).json(list);
	}

	static async registerClient(req, res) {
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
}

export default ClientController;
