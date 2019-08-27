const mongoose = require("mongoose");
const { Schema } = mongoose;

const CustomerSchema = new Schema(
  {
    customerName: { type: String, required: true },
    customerLastName: { type: String, required: true },
    customerUserName: { type: String, required: true },
    cuatomerPassword: { type: String, required: true },
    customerPicture: { type: String },
    status: { type: Schema.Types.ObjectId, ref: "Status" }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Customer", CustomerSchema);
