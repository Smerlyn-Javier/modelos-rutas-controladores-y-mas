const mongoose = require("mongoose");
const { Schema } = mongoose;

const ElementSchema = new Schema(
  {
    element: { type: String, required: true },
    elementDescription1: { type: String },
    elementDescription2: { type: String },
    status: { type: Schema.Types.ObjectId, ref: "Status" }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Element", ElementSchema);
