from fastapi import FastAPI, Form, UploadFile, File
import base64

app = FastAPI()


@app.get("/")
def root():
    return "Hi im fastapi"


@app.post("/upload")
def result(image: str = Form(...), imagename: str = Form(...)):
    # image_as_bytes = str.encode(image)  # convert string to bytes
    img_recovered = base64.b64decode(image)  # decode base64string
    
    try:
        print(type (image))
        print(type(img_recovered))
        # with open("uploaded_" + imagename, "wb") as f:
        #     f.write(img_recovered)
        
        
        
    except Exception:
        return {"message": "Hubo un error al subir la img"}

    return {"message": f"Se ha subido correctamente {imagename}"}

@app.post("/image")
def upload_image(image: UploadFile = File(...)):
    return {"file": image}
    