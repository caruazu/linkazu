import express from "express";
import linkRoutes from "./LinkRoutes.js";

const routes = (app) => {
    app
      .route("/")
      .get((req, res) => res.status(200).send("Bem vindo ao Linkazu.\n"));

    app.use(express.json(), linkRoutes);
};

export default routes;
