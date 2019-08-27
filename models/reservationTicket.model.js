const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReservationTicketSchema = new Schema(
  {
    bus: { type: String, required: true },
    driver: { type: Schema.Types.ObjectId, ref: "Employee" },
    availableTicket: { type: Number },
    departureTime: { type: String, required: true },
    departureDate: { type: String, required: true },
    route: { type: Schema.Types.ObjectId, ref: "Route" },
    price: { type: Number },
    company: { type: Schema.Types.ObjectId, ref: "Company" },
    status: { type: Schema.Types.ObjectId, ref: "Status" }, //activo//vencido
    ticketStatus: { type: Schema.Types.ObjectId, ref: "TicketStatus" } //disponible//agotado
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("ReservationTicket", ReservationTicketSchema);
