import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "usename is required"],
    lowercase: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    unique: true,
  },
  password: { type: String, required: [true, "Password is Required"] },
  createdAt: { type: Date, default: new Date() },
});
export default userSchema;
