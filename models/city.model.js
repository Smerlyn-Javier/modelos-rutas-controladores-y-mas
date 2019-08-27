const mongoose = require("mongoose");
const { Schema } = mongoose;

const CitySchema = new Schema(
  {
    cityName: { type: String, required: true, lowercase: true },
    country: { type: Schema.Types.ObjectId, ref: "Country" },
    status: { type: Schema.Types.ObjectId, ref: "Status" },
    cityPostalCode: { type: String }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("City", CitySchema);
