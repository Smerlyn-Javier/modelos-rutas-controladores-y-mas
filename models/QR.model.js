const mongoose = require("mongoose");
const { Schema } = mongoose;

const QRSchema = new Schema(
  {
    QR: [{ type: String }]
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("QR", QRSchema);
