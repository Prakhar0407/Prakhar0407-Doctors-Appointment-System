import mongoose from "mongoose";

import validator from "validator";

const schemaOfUser = new mongoose.Schema({
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
  password: {
    type: String,
    required: [true, "Password is required!"],
    minLength: [6, "Password Must Contain At Least 6 Characters!"],
    select: false,   //hidden
  },
  role: {
    type: String,
    required: [true, "User Role required!"],
    enum: ["Patient", "Admin"],
  },
  doctorDepartment:{
    type: String,
  },
  docAvatar: {
    public_id: String,
    url: String,
  },

});

export const User = mongoose.model("User", schemaOfUser);
