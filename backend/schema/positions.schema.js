import { Schema } from "mongoose";

const PositionsSchema = new Schema(
  {
    product: { type: String, uppercase: true, required: true },
    name: { type: String, lowercase: true, required: true },
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
  },
  { timestamps: true },
);

export default PositionsSchema;
