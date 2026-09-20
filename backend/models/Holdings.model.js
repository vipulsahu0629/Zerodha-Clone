import { model } from "mongoose";
import HoldingsSchema from "../schema/Holdings.schema.js";
 const HoldingsModel = new model("Holdings", HoldingsSchema);

export default HoldingsModel;