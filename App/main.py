from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
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
pipeline = joblib.load("D:/UNIVERSIDAD/UNIVERSIDAD_CICLO09/MACHINE LEARNING/PROYECTO_ML/App/modelo_creditoRFR.pkl")

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
        contents = await file.read()
        df = pd.read_csv(io.StringIO(contents.decode('utf-8')))

        # Verifica que el CSV tenga las columnas necesarias
        required_cols = [
            'PROVINCIA', 'PRODUCTO', 'TIPO_IFI', 'IFI',
            'MONTO_CUOTA_INICIAL', 'MONTO_VALOR_VIVIENDA', 'INGRESO_MENSUAL_CLIENTE'
        ]
        for col in required_cols:
            if col not in df.columns:
                raise HTTPException(status_code=400, detail=f"Columna faltante: {col}")

        preds = pipeline.predict(df)
        preds_list = preds.tolist()
        return {"predictions": preds_list}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))