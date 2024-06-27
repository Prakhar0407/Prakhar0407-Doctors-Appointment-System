import express from "express";
import {
  addNewAdmin,
  addNewDoctor,
  getAllDoctors,
  getUserDetails,
  login,
  logoutAdmin,
  logoutPatient,
  patientRegister,
} from "../controller/userControl.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);


export default router;
