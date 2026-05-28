import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({

  fullName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  status: {
  type: String,
  default: "Pending",
},

  phone: String,

  company: String,

  service: String,

  quantity: String,

  budget: String,

  projectDetails: String,

  file: String,

}, { timestamps: true });

const Quote = mongoose.model(
  "Quote",
  quoteSchema
);

export default Quote;