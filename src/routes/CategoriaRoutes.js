import express from "express";
import CategoriaController from "../controllers/CategoriaController.js";

const categoriaRoutes = express.Router();

categoriaRoutes.get("/categoria", CategoriaController.categoriaListar);
categoriaRoutes.post("/categoria", CategoriaController.categoriaCriar);
categoriaRoutes.get("/categoria/:id", CategoriaController.categoriaLer);
categoriaRoutes.put("/categoria/:id", CategoriaController.categoriaAtualizar);
categoriaRoutes.delete("/categoria/:id", CategoriaController.categoriaApagar);

export default categoriaRoutes;