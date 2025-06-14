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

router.get("/patient/me", isPatientAuthenticated, getUserDetails);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient)
;
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);

router.get("/doctors", getAllDoctors);
<<<<<<< HEAD
router.post("/doctor/addnewdoctor", isAdminAuthenticated, addNewDoctor);
=======
router.post("/doctor/adddoctor", isAdminAuthenticated, addNewDoctor);
>>>>>>> ffdb2e3c12a0977a10eadf580d932fc294f6c8af


export default router;
