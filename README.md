# Fraud Detection System

A full-stack machine learning system to detect fraudulent transactions using ensemble ML models. Built for interview-readiness with FastAPI, React, MLflow, Docker, and Kubernetes.

## Features

- Machine Learning: Random Forest, Neural Net, Logistic Regression, Isolation Forest
- Model trained on synthetic transaction data (`transactions.csv`)
- FastAPI backend for predictions
- React frontend to submit transactions
- MLflow tracking + Prometheus monitoring (optional)
- Docker + K8s ready
- GitHub Actions CI/CD
- 94%+ F1 Score

## Tech Stack

**Backend**: Python, FastAPI, scikit-learn
**Frontend**: React, Vite
**Infra**: Docker, Kubernetes YAMLs
**Extras**: MLflow, Prometheus, GitHub Actions

## Setup (Local)

### Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app/train_model.py
uvicorn app.main:app --reload
```
