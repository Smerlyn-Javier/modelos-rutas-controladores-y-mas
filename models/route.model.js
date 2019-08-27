const mongoose = require("mongoose");
const { Schema } = mongoose;

const RouteSchema = new Schema(
  {
    route: { type: String, require: true },
    price: { type: String },
    village: { type: String, require: true },
    pointOfDeparture: { type: Schema.Types.ObjectId, ref: "Village" },
    pointOfArrival: { type: Schema.Types.ObjectId, ref: "Village" },
    status: { type: Schema.Types.ObjectId, ref: "Status" }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Route", RouteSchema);
