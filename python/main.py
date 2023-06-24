from fastapi import FastAPI, Form, UploadFile, File
import base64
from  predecir import predecir_imagen
from PIL import Image
import urllib.request



app = FastAPI()


@app.get("/")
def root():
    return "Hi im fastapi"


@app.post("/upload")
def result(image_url:  str = Form(...)):
    # image_as_bytes = str.encode(image)  # convert string to bytes
    # img_recovered = base64.b64decode(image)  # decode base64string
    
    try:
        # print(type (image))
        # print(type(img_recovered))

        # imgPath = "./image/" + imagename
        # with open(imgPath, "wb") as f:
        #   f.write(img_recovered)
        # with open("uploaded_" + imagename, "wb") as f:
        #     f.write(img_recovered)

        
        
        
        # urllib.request.urlretrieve(image_url, imagename)
  
        # img = Image.open("gfg.png")
        

        resultado = predecir_imagen(image_url)
        print(resultado)
         
        
        
        
    except Exception as e:
        print(e)
        return {"message": "Hubo un error al subir la img"}

    return  str(resultado[1])

@app.post("/image")
def upload_image(image: UploadFile = File(...)):
    return {"file": image}
    