import express from "express";
import linkRoutes from "./LinkRoutes.js";
import categoriaRoutes from "./CategoriaRoutes.js";

const routes = (app) => {
    app
      .route("/")
      .get((req, res) => res.status(200).send("Bem vindo ao Linkazu.\n"));

    app.use(express.json(), linkRoutes);
    app.use(express.json(), categoriaRoutes)
};

export default routes;
