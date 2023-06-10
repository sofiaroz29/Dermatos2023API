import multer from 'multer';
// import Datauri from 'datauri';


// const datauri = new Datauri();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('image');

//pasar el buffer del memorystorage a un base64 encoded string
// const dataUri = (fileFormat, buffer) =>{
//     datauri.format(fileFormat, buffer);
// }
   

export {upload}