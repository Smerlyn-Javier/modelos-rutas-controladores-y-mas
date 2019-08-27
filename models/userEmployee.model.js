const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserEmployeeSchema = new Schema(
  {
    employee: { type: Schema.Types.ObjectId, ref: "Employee" },
    userRole: { type: Schema.Types.ObjectId, ref: "Role" },
    company: { type: Schema.Types.ObjectId, ref: "Company" },
    userEmployeePassword: { type: String, lowercase: true },
    userEmployeeName: { type: String, lowercase: true },
    status: { type: Schema.Types.ObjectId, ref: "Status" }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("UserEmployee", UserEmployeeSchema);
