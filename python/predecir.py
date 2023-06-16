import tensorflow as tf
from tensorflow.keras.preprocessing import image
import numpy as np
from PIL import Image
import requests



altura, longitud = 100, 100
# Carga el modelo y los pesos
model = tf.keras.models.load_model('././Dermatos/modelo/modelo.h5')
model.load_weights('././Dermatos/modelo/pesos.h5')

# Define una función para realizar la predicción
def predecir_imagen(ruta_imagen):
    # img = image.load_img(ruta_imagen, target_size=(altura, longitud))
    img = Image.open(requests.get(ruta_imagen, stream = True).raw)
    img = img.resize((altura, longitud))
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img = img / 255.0  # Normalizar la imagen

    prediccion = model.predict(img)
    probabilidades = prediccion[0] * 100
    etiquetas = ['No Melanoma', 'Melanoma']

    print("Presultado de la prediccion")
    for etiqueta, probabilidad in zip(etiquetas, probabilidades):
       print(f"{etiqueta}: {probabilidad:.2f}%") 
    return probabilidades

# Llama a la función predecir_imagen() con la ruta de la imagen

# probabilidad_melanoma = predecir_imagen(ruta_imagen)
