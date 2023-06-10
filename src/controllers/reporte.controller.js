import { Router } from 'express';
import multer from "multer";
import Formdata from 'form-data'
import {cloudinaryUpload} from '../services/cloudinary.service.js'
//import { dataUri } from '../middlewares/multer.js';




const router = Router ();


const getResult = async (req, res) => {

  const image = req.file;

  const fileFormat = image.mimetype.split('/')[1]
  const base64 = Buffer.from(image.buffer).toString("base64")
  const imageDetails = await cloudinaryUpload(base64, fileFormat)
  res.send('Se ha subido correctamente a cloudinary', imageDetails)

  const form = new FormData();
  form.append('file', image.buffer, image.originalname);        

  const response = await axios.post(url, form, {
    headers: {
    ...form.getHeaders(),
    },
  }).then(response => {
			res.status(200).json(response.data);
		})
		.catch((err) => {
			res.status(500).json({ message: err });
		});

}


export {getResult}