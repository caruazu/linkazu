import mongoose, {mongo} from "mongoose";
import "dotenv/config"; 

async function conectar() {
    mongoose.connect(process.env.DATABASE_URL);
    return mongoose.connection;
}

export default conectar;

