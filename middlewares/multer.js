import multer from 'multer';
import Datauri from 'datauri';

const dUri = new Datauri();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }.single(image));

//pasar el buffer del memorystorage a un base64 encoded string
const dataUri = req => 
dUri.format(path.extname(req.file.originalname).toString(), 
req.file.buffer);

export default {upload, dataUri}