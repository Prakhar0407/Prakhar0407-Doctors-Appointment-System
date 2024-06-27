import express from "express";
import {
  getAllMessages,
  sendMessage,
} from "../controller/messageController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/send", sendMessage);  //because we are sending the message
router.get("/getall", isAdminAuthenticated, getAllMessages);

export default router;
