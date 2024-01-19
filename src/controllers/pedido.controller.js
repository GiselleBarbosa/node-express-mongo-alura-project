import { pedido } from "../models/pedido.js";

class PedidoController {
  static async listarPedidos(req, res) {
    try {
      const listaPedidos = await pedido.find({});
      res.status(200).json(listaPedidos);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na requisição`,
      });
    }
  }

  static async listarPedidoPorId(req, res) {
    try {
      const id = req.params.id;
      const orderFound = await pedido.findById(id);
      res.status(200).json(orderFound);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na requisição do pedido`,
      });
    }
  }

  static async criarPedido(req, res) {
    try {
      const novoPedido = await pedido.create(req.body);
      res
        .status(201)
        .json({ message: "criado com sucesso!", cliente: novoPedido });
    } catch (erro) {
      res.status(500).json({
        message: `${erro.message} - falha ao 
            cadastrar pedido`,
      });
    }
  }

  static async atualizarPedido(req, res) {
    try {
      const id = req.params.id;
      await pedido.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        message: "pedido atualizado com sucesso.",
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na atualização do pedido`,
      });
    }
  }

  static async removerPedido(req, res) {
    try {
      const id = req.params.id;
      await pedido.findByIdAndDelete(id);
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

export default PedidoController;
