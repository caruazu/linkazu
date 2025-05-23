import link from "../models/LinkModel.js";

class LinkController {
  static async linkListar(req, res) {
    try {
      const links = await link.find({});
      res.status(200).json(links);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async linkCriar(req, res) {
    try {
      const linkNovo = await link.create(req.body);
      res.status(201).json(linkNovo);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async linkLer(req, res) {
    try {
      const id = req.params.id;
      const linkDB = await link.findById(id);
      res.status(200).json(linkDB);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async linkAtualizar(req, res) {
    try {
      const id = req.params.id;
      await link.findByIdAndUpdate(id, req.body);
      res.status(200).send();
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async linkApagar(req, res) {
    try {
      const id = req.params.id;
      await link.findByIdAndDelete(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export default LinkController;
