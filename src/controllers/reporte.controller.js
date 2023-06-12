import { Router } from 'express';
import multer from "multer";
import FormData from 'form-data'
import {cloudinaryUpload} from '../services/cloudinary.service.js'
import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();
//import { dataUri } from '../middlewares/multer.js';




const router = Router ();


const getResult = async (req, res) => {

  const image = req.file;

  // const fileFormat = image.mimetype.split('/')[1]
  const base64 = Buffer.from(image.buffer).toString("base64")
  // const imageDetails = await cloudinaryUpload(base64, fileFormat)
  // if (imageDetails){
  //   res.send('Se ha subido correctamente a cloudinary', imageDetails)
  // }
  
  console.log(image)
 


  const form = {"image": base64, "imagename": image.originalname};     
  

  const response = await axios({
    method: "post",
    url: "http://127.0.0.1:8000/upload",
    data: form,
    headers: { "Content-Type": "multipart/form-data" },
  }).then(response => {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });

}


export {getResult}