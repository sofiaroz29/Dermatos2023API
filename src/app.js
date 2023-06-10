import express from "express";
import reporteRouter from "./routes/reporte.routes.js";
import { cloudinaryConfig } from './server/config/cloudinaryConfig.js'
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json())
app.use("/api", reporteRouter)
app.use('*', cloudinaryConfig);
app.set("port", 8080);




export default app;