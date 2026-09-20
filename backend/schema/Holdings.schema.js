import mongoose, { Schema } from "mongoose";

const HoldingsSchema = new Schema({
  name: {
    type:String,
    required:true,
    uppercase:true,
  },
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
},{timestamps:true});

export default HoldingsSchema;