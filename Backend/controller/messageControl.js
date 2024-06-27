
import { Message } from "../models/schemaOfMessage.js";

import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";

export const sendMessage = async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {  //check filling
    return res.status(400).json({
      success: false,
      message: "Please fill all details!"
    });
  }
  await Message.create({ firstName, lastName, email, phone, message });
  res.status(200).json({
    success: true,
    message: "Message successfully sent!",
  });
};



