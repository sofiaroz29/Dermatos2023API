import { Router } from 'express';
import upload from "../middlewares/multer.js"


const router = Router ();

import getResult from "../controllers/reporte.controller";


router.post ("/upload", upload, getResult);





export default router; 