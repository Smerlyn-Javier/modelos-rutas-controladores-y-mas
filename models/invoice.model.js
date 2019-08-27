const mongoose = require("mongoose");
const { Schema } = mongoose;

const InvoiceSchema = new Schema(
  {
    customer: { type: String, required: true },
    ticket: { type: Schema.Types.ObjectId, ref: "Ticket" },
    status: { type: Schema.Types.ObjectId, ref: "Status" }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Invoice", InvoiceSchema);
