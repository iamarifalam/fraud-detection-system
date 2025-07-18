from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import numpy as np
import os

app = FastAPI(title="Fraud Detection API")

# Load your trained model
model_path = os.path.join(os.path.dirname(__file__), "model", "fraud_model.pkl")
try:
    model = joblib.load(model_path)
except Exception as e:
    raise RuntimeError(f"Failed to load model: {e}")

# Define the expected input format
class TransactionInput(BaseModel):
    feature1: float
    feature2: float
    feature3: float
    feature4: float
    feature5: float
    feature6: float
    feature7: float
    feature8: float
    feature9: float
    feature10: float

@app.get("/")
def root():
    return {"message": "Fraud detection API is live!"}

@app.post("/predict")
def predict(transaction: TransactionInput):
    try:
        features = np.array([[transaction.feature1, transaction.feature2, transaction.feature3,
                              transaction.feature4, transaction.feature5, transaction.feature6,
                              transaction.feature7, transaction.feature8, transaction.feature9,
                              transaction.feature10]])
        prediction = model.predict(features)
        label = "Fraud" if prediction[0] == 1 else "Legit"
        return {"prediction": int(prediction[0]), "label": label}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction failed: {e}")
