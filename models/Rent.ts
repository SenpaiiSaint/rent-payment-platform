import mongoose from "mongoose";

const RentSchema = new mongoose.Schema({
    tenantName: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    status: { type: String, default: "paid" }
});

export default mongoose.model("Rent", RentSchema);