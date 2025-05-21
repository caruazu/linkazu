import http from "http";

const PORTA = 3000;
const HOST = "localhost";

const rotas = {
    "/": "Olar\n",
    "/redes": "Me siga em @caruazu\n",
    "/sobre": "Gustavo Caruazu cria sites\n"
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(PORTA, () => {
    console.log(`Server rodando em http://${HOST}:${PORTA}/`); 
});