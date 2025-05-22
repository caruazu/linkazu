import express from "express";

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


const links = [
  {
    id: 1,
    titulo: "Google",
    url: "https://www.google.com",
  },
  {
    id: 2,
    titulo: "Facebook",
    url: "https://www.facebook.com",
  },
  {
    id: 3,
    titulo: "Twitter",
    url: "https://www.twitter.com",
  },
  {
    id: 4,
    titulo: "Instagram",
    url: "https://www.instagram.com",
  },
  {
    id: 5,
    titulo: "LinkedIn",
    url: "https://www.linkedin.com",
  },
];


function linkGetByIndex(id) {
    return links.findIndex( livro => {
        return livro.id == Number(id);
    });
}



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
app.get("/link", (req, res) => {
  res.status(200).json(links);
});

export default app;