import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  passportNumber: { type: String, required: true },
  passportSeries: { type: String, required: true },
  passportIssueDate: { type: Date, required: true },
});

export default mongoose.model("Client", clientSchema);
