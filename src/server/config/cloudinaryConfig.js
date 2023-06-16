// import { config, uploader } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();


// export { cloudinaryConfig, uploader };

import { v2 as cloudinary } from 'cloudinary'

// const cloudinaryConfig = () =>{
//     const conf = config({
//         cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//         api_key: process.env.CLOUDINARY_API_KEY,
//         api_secret: process.env.CLOUDINARY_API_SECRET,
//     });

//     return conf
// } 


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export { cloudinary };