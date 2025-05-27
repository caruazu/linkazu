import mongoose from "mongoose";
import { categoriaSchema } from "./CategoriaModel.js";

const linkSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: true },
  url: { type: String, required: true },
  categoria: categoriaSchema
},
{ 
  versionKey: false 
});

const link = mongoose.model("links", linkSchema);

export default link;
