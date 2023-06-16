import sys
import os
import tensorflow as tf
from keras.preprocessing.image import ImageDataGenerator
from keras.optimizers import Adam
from tensorflow.python.keras.models import Sequential
from tensorflow.python.keras.layers import Dropout, Flatten, Dense, Activation, LeakyReLU
from tensorflow.python.keras.layers import Convolution2D, MaxPooling2D
from tensorflow.python.keras import backend as K

K.clear_session()

data_entrenamiento = './data/train'
data_validacion = './data/test'

# Parámetros
epocas = 20
altura, longitud = 100, 100
batch_size = 32
pasos = 1000
pasos_validacion = 200
filtrosConv1 = 64  # Aumentar el número de filtros
filtrosConv2 = 128  # Aumentar el número de filtros
tamano_filtro1 = (3, 3)
tamano_filtro2 = (3, 3)  # Aumentar el tamaño de los filtros
tamano_pool = (2, 2)
clases = 2
learning_rate = 0.0001  # Utilizar un learning rate más bajo

# Preprocesar las imágenes

entrenamiento_datagen = ImageDataGenerator(
    rescale=1.0 / 255,
    shear_range=0.3,
    zoom_range=0.3,
    horizontal_flip=True
)
validacion_datagen = ImageDataGenerator(
    rescale=1.0 / 255
)

imagen_entrenamiento = entrenamiento_datagen.flow_from_directory(
    data_entrenamiento,
    target_size=(altura, longitud),
    batch_size=batch_size,
    class_mode='categorical'
)

imagen_validacion = validacion_datagen.flow_from_directory(
    data_validacion,
    target_size=(altura, longitud),
    batch_size=batch_size,
    class_mode='categorical'
)

# Crear la red CNN

cnn = Sequential()

cnn.add(Convolution2D(filtrosConv1, tamano_filtro1, padding='same', input_shape=(altura, longitud, 3)))
cnn.add(LeakyReLU(alpha=0.1))  # Utilizar LeakyReLU como función de activación

cnn.add(Convolution2D(filtrosConv1, tamano_filtro1, padding='same'))
cnn.add(LeakyReLU(alpha=0.1))
cnn.add(MaxPooling2D(pool_size=tamano_pool))

cnn.add(Convolution2D(filtrosConv2, tamano_filtro2, padding='same'))
cnn.add(LeakyReLU(alpha=0.1))
cnn.add(Convolution2D(filtrosConv2, tamano_filtro2, padding='same'))
cnn.add(LeakyReLU(alpha=0.1))
cnn.add(MaxPooling2D(pool_size=tamano_pool))

cnn.add(Flatten())
cnn.add(Dense(256))  # Aumentar el tamaño de la capa densa
cnn.add(LeakyReLU(alpha=0.1))
cnn.add(Dropout(0.5))
cnn.add(Dense(clases, activation='softmax'))

# Compilar el modelo con un optimizador Adam
opt = 'adam'
cnn.compile(optimizer=opt, loss='categorical_crossentropy', metrics=['accuracy'])

cnn.fit(imagen_entrenamiento, steps_per_epoch=pasos, epochs=epocas, validation_data=imagen_validacion,
        validation_steps=pasos_validacion)

dir = './modelo'

if not os.path.exists(dir):
    os.mkdir(dir)
cnn.save('./modelo/modelo.h5')
cnn.save_weights('./modelo/pesos.h5')
