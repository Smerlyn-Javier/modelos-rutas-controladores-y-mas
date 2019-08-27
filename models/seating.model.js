const mongoose = require("mongoose");
const { Schema } = mongoose;

const SeatingSchema = new Schema(
  {
    seating: { type: String, required: true, uppercase: true },
    status: { type: Schema.Types.ObjectId, ref: "Status" }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Seating", SeatingSchema);
