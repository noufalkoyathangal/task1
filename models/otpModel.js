const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OTPVerificationSchema = new Schema({
  email: String,
  otp: String,
  createdAt: Date,
  expiresAt: Date,
});

const otpModel = mongoose.model("otpModel", OTPVerificationSchema);
module.exports = otpModel;
