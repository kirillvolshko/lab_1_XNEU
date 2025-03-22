import mongoose from "mongoose";

const pawnSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
  description: { type: String, required: true },
  pawnDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  amount: { type: Number, required: true },
  commission: { type: Number, required: true },
});

export default mongoose.model("Pawn", pawnSchema);
