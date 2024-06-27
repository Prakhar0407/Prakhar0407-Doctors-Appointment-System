import express from "express";
import 
{sendMessage,} 

from "../controller/messageControl.js";


const router = express.Router();

router.post("/send", sendMessage);  //because we are sending the message


export default router;
