import { cloudinary } from '../server/config/cloudinaryConfig.js'

import dotenv from 'dotenv';
dotenv.config();

const cloudinaryUpload = async (fileString, format) => {
    
    try {

        const result = await cloudinary.uploader.upload(`data:image/${format};base64,${fileString}`)
        console.log('Tu imagen se ha subido correctamente a cloudinary', result)
        return result

    }
   
    catch(err) {
        console.log('Ha habido un error', err);
    };
    
};


export { cloudinaryUpload }