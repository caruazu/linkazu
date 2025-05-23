import express from "express";

import routes from "./routes/index.js";
import conectar from "./config/dbConnect.js";


const conexao = await conectar();
conexao.on("error",(erro) => {
    console.error(erro);
});
conexao.once("open", () => {
    console.log("banco conectado")
});

const app = express();
routes(app);

export default app;