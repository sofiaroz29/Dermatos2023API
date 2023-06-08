import { uploader} from '../server/config/cloudinaryConfig'
import {dataUri} from '../middlewares/multer';

function cloudinaryUpload(image){
    if(req.file) {
        const file = dataUri(req).content;
        return uploader.upload(file).then((result) => {
        const image = result.url;
        return res.status(200).json({
        message: 'Tu imagen se ha subido correctamente a cloudinary',
        data: {image}
        })
        }).catch((err) => res.status(400).json({
        messge: 'Ha habido un erro',
        data: {
        err
        }
        }))
        };
}

export { cloudinaryUpload }