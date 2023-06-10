import { Router } from 'express';
import * as Multer from '../middlewares/multer.js';
import {getResult} from "./../controllers/reporte.controller.js";

const router = Router ();




router.post ("/upload", Multer.upload, getResult);





export default router;