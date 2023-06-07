const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DineInSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  TableNo: {
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

const Dine = mongoose.model("Dine", DineInSchema);
module.exports = Dine;
