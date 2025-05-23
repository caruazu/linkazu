import express from "express";
import LinkController from "../controllers/LinkController.js";

const linkRoutes = express.Router();

linkRoutes.get("/link", LinkController.linkListar);
linkRoutes.post("/link", LinkController.linkCriar);
linkRoutes.get("/link/:id", LinkController.linkLer);
linkRoutes.put("/link/:id", LinkController.linkAtualizar);
linkRoutes.delete("/link/:id", LinkController.linkApagar);


export default linkRoutes;
