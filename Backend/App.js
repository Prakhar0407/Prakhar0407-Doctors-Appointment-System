import express from "express";

import {config} from "dotenv";
import cors from "cors"; //connecting frontend
const app= express();
config({ path: "./config/config.env" });
import fileUpload from "express-fileupload";

import { databaseworking } from "./database/databaseworking.js";
import cookieParser from "cookie-parser";

app.use(cookieParser());
app.use(express.json());

databaseworking();

app.use(
    cors({
        origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
        method: ["GET", "POST", "DELETE", "PUT"],
        credentials: true,
    })
);
app.use(express.urlencoded({extended: true}));  //date etc. readable

app.use(  //accoring to documentaion
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
  );

export default app;