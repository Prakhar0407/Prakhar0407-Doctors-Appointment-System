import express from "express";
import {
  addAdmin,
  login,
  addNewDoctor,
  getAllDoctors,
  getUserDetails,
  logoutAdmin,
  logoutPatient,
  patientRegister,
} from "../controller/userControl.js";

import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/authenticateAndAuthorize.js";


const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addadmin",isAdminAuthenticated ,addAdmin);


export default router;
