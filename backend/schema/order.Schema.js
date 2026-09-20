import { Schema } from "mongoose";

const orderSchema = new Schema(
  { name: String, qty: Number, price: Number, mode: String },
  { timestamps: true },
);
export default orderSchema();