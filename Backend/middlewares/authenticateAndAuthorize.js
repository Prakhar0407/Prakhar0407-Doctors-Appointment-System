import jwt from "jsonwebtoken";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./errorMiddleware.js";
import { User } from "../models/schemaOfUser.js";



export const isPatientAuthenticated = catchAsyncErrors(
  async (req, res, next) => {
    const token = req.cookies.patientToken;
    if (!token) {
      return next(new ErrorHandler("User is not authenticated!", 400));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded.id);
    if (req.user.role !== "Patient") {
      return next(
        new ErrorHandler(`${req.user.role} not authorized for this resource!`, 403)
      );
    }
    next();
  }
);


//authentication
export const isAdminAuthenticated = catchAsyncErrors(
    async (req, res, next) => {
      const token = req.cookies.adminToken;

      if (!token) {
        return next(new ErrorHandler("Admin is not authenticated!", 400)
        );
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = await User.findById(decoded.id);   // from schemaOfUser

      //authorize
      if (req.user.role !== "Admin") {
        return next(new ErrorHandler(`${req.user.role} can not be authorized!`, 403)
        );
      }
      next();
    }
  );



  export const isDoctorAuthenticated = async (req, res, next) => {
    const token =
      req.cookies.doctorToken || req.cookies.patientToken || req.cookies.adminToken;
  
    if (!token) return res.status(401).json({ message: "Login First" });
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await User.findById(decoded.id);
  
      if (!user || user.role !== "Doctor") {
        return res.status(403).json({ message: "Access denied" });
      }
  
      req.user = user;
      next();
    } catch (error) {
      res.status(500).json({ message: "Authentication failed" });
    }
  };
  