const mongoose = require("mongoose");
const { Schema } = mongoose;

const VillageSchema = new Schema(
  {
    village: { type: Schema.Types.ObjectId, ref: "Employee" },
    villageLongituded: { type: Number, required: true },
    villageLatituded: { type: Number, required: true },
    status: { type: Schema.Types.ObjectId, ref: "Status" }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Village", VillageSchema);
