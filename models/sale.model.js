const mongoose = require("mongoose");
const { Schema } = mongoose;

const SaleSchema = new Schema(
  {
    reservationTicket: {
      type: Schema.Types.ObjectId,
      ref: "ReservationTicket"
    },
    customer: { type: Schema.Types.ObjectId, ref: "Customer" },
    stop: { type: Schema.Types.ObjectId, ref: "Stop" },
    seating: [{ type: Schema.Types.ObjectId, ref: "Seating" }],
    luggage: { type: Boolean, default: false },
    status: { type: Schema.Types.ObjectId, ref: "Status" }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Sale", SaleSchema);
