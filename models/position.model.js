const mongoose = require("mongoose");
const { Schema } = mongoose;

const PositionSchema = new Schema(
  {
    position: { type: String, required: true, lowercase: true },
    company: { type: Schema.Types.ObjectId, ref: "Company" },
    positionSalary: { type: Number },
    positionDescription: { type: String },
    status: { type: Schema.Types.ObjectId, ref: "Status" }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Position", PositionSchema);
