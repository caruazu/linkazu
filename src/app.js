import express from "express";

import links from "./model/link.js"
import conectar from "./config/dbConnect.js";


const conexao = await conectar();
conexao.on("error",(erro) => {
    console.error(erro);
});
conexao.once("open", () => {
    console.log("banco conectado")
});

const app = express();
app.use(express.json()); // Middleware para analisar o corpo da requisição como JSON


app.get("/", (req, res) => {
    res.status(200).send("Bem vindo ao Linkazu.\n");
})

//  criar links
app.post("/link", (req, res) => {
    const newLink = {
        id: links.length + 1,
        titulo: req.body.titulo,
        url: req.body.url
    };
    links.push(newLink);
    res.status(201).json(newLink);
});

// ler links
app.get("/link/:id", (req, res) => {
    const index = linkGetByIndex(req.params.id);
    res.status(200).json(links[index]);
});

// atualizar links
app.put("/link/:id", (req, res) => {
    const index = linkGetByIndex(req.params.id);
    links[index].titulo = req.body.titulo;
    links[index].url = req.body.url;
    res.status(200).json(links[index]);
});

// apagar links
app.delete("/link/:id", (req, res) => {
    const index = linkGetByIndex(req.params.id);
    links.splice(index, 1);
    res.status(204).send();
});

// listar links
app.get("/link", async (req, res) => {
  const linksLista = await links.find({})
  res.status(200).json(linksLista);
});

export default app;