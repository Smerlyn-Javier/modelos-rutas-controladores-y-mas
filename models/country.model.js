const mongoose = require("mongoose");
const { Schema } = mongoose;

const CountrySchema = new Schema(
  {
    countryName: { type: String, required: true, lowercase },
    status: { type: Schema.Types.ObjectId, ref: "Status" }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Country", CountrySchema);
