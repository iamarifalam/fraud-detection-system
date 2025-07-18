# app/train_model.py

import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import joblib
import os

# Dummy dataset — replace with your own if needed
data = {
    'feature1': [0, 1, 0, 1],
    'feature2': [1, 0, 1, 0],
    'is_fraud': [0, 1, 0, 1]
}
df = pd.DataFrame(data)

X = df[['feature1', 'feature2']]
y = df['is_fraud']

# Train a simple model
model = RandomForestClassifier()
model.fit(X, y)

# Ensure model directory exists
os.makedirs('app/model', exist_ok=True)

# Save model
joblib.dump(model, 'app/model/fraud_model.pkl')
print("✅ Model saved to app/model/fraud_model.pkl")
