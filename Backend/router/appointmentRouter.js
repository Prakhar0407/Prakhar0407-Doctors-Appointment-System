import express from "express";

import {
postAppointment
} from "../controller/appointmentControl";

import {
  isPatientAuthenticated,
} from "../middlewares/authenticateAndAuthorize.js";

const router = express.Router();

router.post("/post", isPatientAuthenticated, postAppointment);


export default router;