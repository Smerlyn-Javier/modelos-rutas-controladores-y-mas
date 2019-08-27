const mongoose = require("mongoose");
const { Schema } = mongoose;

const PriceSchema = new Schema(
  {
    price: { type: Number, required: true }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Price", PriceSchema);
