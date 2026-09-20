import { model } from "mongoose";
import userSchema from "../schema/user.schema";


const userModel = new model("user", userSchema);

export default userModel;
