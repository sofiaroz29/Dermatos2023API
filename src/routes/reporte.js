import { Router } from 'express';


const router = Router ();

import getResult from "../controllers/reporte.controller";


router.post ("/upload",  upload.single('image'), getResult);





export default router; 