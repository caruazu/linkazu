import app from "./src/app.js";
import "dotenv/config"; 

const PORTA = process.env.PORTA;

app.listen(PORTA, () => {
    console.log(`Server rodando em http://localhost:${PORTA}/`); 
});