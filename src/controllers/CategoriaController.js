import { categoria } from "../models/CategoriaModel.js";

class CategoriaController {
  static async categoriaListar(req, res) {
    try {
      const categorias = await categoria.find({});
      res.status(200).json(categorias);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async categoriaCriar(req, res) {
    try {
      const categoriaDB = await categoria.create(req.body);
      res.status(201).json(categoriaDB);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async categoriaLer(req, res) {
    try {
      const id = req.params.id;
      const categoriaDB = await categoria.findById(id);
      res.status(200).json(categoriaDB);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async categoriaAtualizar(req, res) {
    try {
      const id = req.params.id;
      await categoria.findByIdAndUpdate(id, req.body);
      res.status(200).send();
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async categoriaApagar(req, res) {
    try {
      const id = req.params.id;
      await categoria.findByIdAndDelete(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export default CategoriaController;