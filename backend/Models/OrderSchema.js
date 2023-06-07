const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  bill: {
    type: Number,
    required: true,
  },
  Dish: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
    default: "pending",
  },
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
