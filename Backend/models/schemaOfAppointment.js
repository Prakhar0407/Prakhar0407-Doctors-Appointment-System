import mongoose from "mongoose";
import validator from "validator";

const schemaOfAppointment = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name Must Contain At Least 3 Letters!"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last Name Must Contain At Least 3 Letters!"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Email is not Valid!"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
    maxLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
  },
  dob: {
    type: Date,
    required: [true, "DOB is required!"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required!"],
    enum: ["Male", "Female"],
  },
  appointmentDate: {
    type: String,
    required: [true, "Appointment Date is required!"],
  },
  department: {
    type: String,
    required: [true, "Department is required!"],
  },
  doctor: {
    firstName: {
      type: String,
      required: [true, "Doctor First Name is required!"],
    },
    lastName: {
      type: String,
      required: [true, "Doctor Last Name is required!"],
    },
  },
  address: {
    type: String,
    required: [true, "Address is required!"],
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Doctor ID is required!"],
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Patient ID is required!"],
  },
  hasVisited: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected", "Done"],
    default: "Pending",
  },
  rate: {
    type: Number,
    enum: [0, 1, 2, 3, 4, 5],
    default: 0,
  },
});

export const Appointment = mongoose.model("Appointment", schemaOfAppointment);
