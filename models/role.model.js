const mongoose = require("mongoose");
const { Schema } = mongoose;

const RoleSchema = new Schema(
  {
    role: { type: String, require: true },
    roleDescription: { type: String }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("Role", RoleSchema);
