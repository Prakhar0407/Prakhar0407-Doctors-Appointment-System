import express from "express";

import {
  postAppointment, 
  getAllAppointments ,   
  deleteAppointment,  
  updateAppointmentStatus,
} from "../controller/appointmentControl.js";

import {
  isPatientAuthenticated,isAdminAuthenticated, isDoctorAuthenticated
} from "../middlewares/authenticateAndAuthorize.js";

import {Appointment} from "../models/schemaOfAppointment.js";

const router = express.Router();

router.post("/post", isPatientAuthenticated, postAppointment);
router.get("/getall", getAllAppointments);

//id required
router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatus);
router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);

router.get("/doctor/appointments", isDoctorAuthenticated, async (req, res) => {
  try {
    const appointments = await Appointment.find({ doctor: req.user._id }); // 🟢 filter by logged-in doctor
    res.status(200).json({ success: true, appointments });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

export default router;