import mongoose, { Schema, model, models, Document } from "mongoose";

// Define TypeScript interface for type safety
interface IRent extends Document {
  tenantName: string;
  amount: number;
  date?: Date;
  status: "pending" | "paid" | "failed";
}

const RentSchema = new Schema<IRent>(
  {
    tenantName: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ["pending", "paid", "failed"], // Ensure only valid status values
      default: "paid",
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt
);

const Rent = models.Rent || model<IRent>("Rent", RentSchema);

export default Rent;
