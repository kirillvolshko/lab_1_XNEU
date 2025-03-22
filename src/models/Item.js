import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  note: { type: String },
});

export default mongoose.model("Item", itemSchema);
