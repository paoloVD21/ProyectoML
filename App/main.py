from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.responses import StreamingResponse
import pandas as pd
import io
import joblib
import numpy as np

app = FastAPI()

# Permitir CORS desde frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500"],  # Cambia * por el dominio de tu frontend para producción
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Definir modelo de datos para JSON manual
class ManualData(BaseModel):
    PROVINCIA: str
    PRODUCTO: str
    TIPO_IFI: str
    IFI: str
    MONTO_CUOTA_INICIAL: float
    MONTO_VALOR_VIVIENDA: float
    INGRESO_MENSUAL_CLIENTE: float

# Cargar pipeline/modelo previamente entrenado
# Ajusta el path según donde guardaste el modelo
pipeline = joblib.load("D:/UNIVERSIDAD/UNIVERSIDAD_CICLO09/MACHINE LEARNING/PROYECTO_ML/App/modelo_creditoXGB.pkl")

@app.post("/predict_manual")
async def predict_manual(data: ManualData):
    try:
        # Convertir a DataFrame de 1 fila
        input_df = pd.DataFrame([data.dict()])
        # Predecir usando pipeline
        pred = pipeline.predict(input_df)[0]
        return {"predicted_monto": float(pred)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/predict_csv")
async def predict_csv(file: UploadFile = File(...)):
    try:
        # Leer el archivo CSV
        contents = await file.read()
        df = pd.read_csv(io.StringIO(contents.decode('utf-8')))

        # Verifica que el CSV tenga las columnas necesarias
        required_cols = ['PROVINCIA', 'PRODUCTO', 'TIPO_IFI', 'IFI', 
                         'MONTO_CUOTA_INICIAL', 'MONTO_VALOR_VIVIENDA', 'INGRESO_MENSUAL_CLIENTE']
        for col in required_cols:
            if col not in df.columns:
                raise HTTPException(status_code=400, detail=f"Columna faltante: {col}")

        # Realizar predicción con el pipeline cargado
        preds = pipeline.predict(df)

        # Añadir las predicciones como una nueva columna en el DataFrame
        df['prediccion_Monto_Credito'] = preds

        # Guardar el DataFrame con las predicciones en un archivo CSV en memoria
        output = io.StringIO()
        df.to_csv(output, index=False)
        output.seek(0)

        # Retornar el archivo CSV con las predicciones como respuesta para descarga
        return StreamingResponse(output, media_type="text/csv", headers={"Content-Disposition": "attachment; filename=predicciones_Monto_Credito.csv"})

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))