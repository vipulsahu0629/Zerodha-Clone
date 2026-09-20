import { model } from "mongoose";
import positionsSchema from "../schema/positions.schema.js";

const positionsModel = new model("positions",positionsSchema);

export default positionsModel;