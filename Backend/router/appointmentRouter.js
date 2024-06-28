import express from "express";

import {
postAppointment, getAllAppointments
} from "../controller/appointmentControl";

import {
  isPatientAuthenticated,isAdminAuthenticated
} from "../middlewares/authenticateAndAuthorize.js";

const router = express.Router();

router.post("/post", isPatientAuthenticated, postAppointment);
router.get("/getall", isAdminAuthenticated, getAllAppointments);


export default router;