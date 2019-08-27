const mongoose = require("mongoose");
const { Schema } = mongoose;

const StatusSchema = new Schema(
  {
    status: { type: String, required: true, uppercase: true },
    description: { type: String }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Status", StatusSchema);
