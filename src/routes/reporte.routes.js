import { Router } from 'express';
import upload from "../middlewares/multer.js"
import getResult from "../controllers/reporte.controller.js";

const router = Router ();




router.post ("/upload", upload, getResult);





export default router; 