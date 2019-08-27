const mongoose = require("mongoose");
const { Schema } = mongoose;

const BankSchema = new Schema(
  {
    bankName: { type: String, required: true, lowercase: true },
    status: { type: Schema.Types.ObjectId, ref: "Status" }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Bank", BankSchema);
