import { model } from "mongoose";
import orderSchema from "../schema/order.Schema";

const orderModel = new model("order", orderSchema);
export default orderModel();