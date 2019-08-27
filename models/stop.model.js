const mongoose = require("mongoose");
const { Schema } = mongoose;

const StopSchema = new Schema(
  {
    stop: { type: String, required: true, uppercase: true },
    stopLongituded: { type: Number, required: true },
    stopLatituded: { type: Number, required: true },
    status: { type: Schema.Types.ObjectId, ref: "Status" }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Stop", StopSchema);
