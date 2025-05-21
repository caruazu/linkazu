import app from "./src/app.js";

const PORTA = 3000;
const HOST = "localhost";

app.listen(PORTA, () => {
    console.log(`Server rodando em http://${HOST}:${PORTA}/`); 
});