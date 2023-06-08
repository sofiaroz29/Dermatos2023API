import { Router } from 'express';
import multer from "multer";
import Formdata from 'form-data'



const router = Router ();


const getResult = async (req, res) => {


  const form = new FormData();
  const image = req.file;
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


export default getResult