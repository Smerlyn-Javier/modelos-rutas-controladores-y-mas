const mongoose = require("mongoose");
const { Schema } = mongoose;

const BusSchema = new Schema(
  {
    company: { type: Schema.Types.ObjectId, ref: "Company" },
    busNumber: { type: Number, required: true },
    element: { type: Schema.Types.ObjectId, ref: "element" },
    busYear: { type: String },
    busColor: { type: String },
    busModel: { type: String },
    status: { type: Schema.Types.ObjectId, ref: "Status" },
    busCapacity: { type: Number, required: true },
    busLicensePlate: { type: String }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Bus", BusSchema);
