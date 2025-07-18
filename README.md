
# Fraud Detection System

A full-scale, production-grade fraud detection system built using ensemble machine learning, FastAPI, Docker, Kubernetes, MLflow, and GitHub Actions. Designed to be interview-ready and production-ready.

This project simulates a real-world fraud detection pipeline, complete with model training, inference API, logging, monitoring, and deployment strategy.

Built and maintained by Arif Alam
GitHub: https://github.com/iamarifalam

Highlights
Built for interview, portfolio, and recruiter-ready showcase
Ensemble model with Neural Network, Random Forest, Isolation Forest, Logistic Regression
FastAPI backend with live Swagger docs
Fully containerized with Docker
Kubernetes deployment ready
MLflow for experiment tracking
Prometheus + Grafana for monitoring
GitHub Actions for CI/CD

Folder Structure

fraud-detection-system
├── backend
│   ├── main.py
│   ├── model.py
│   ├── predict.py
│   ├── utils.py
│   ├── train_model.py
├── frontend
│   ├── main.py
│   ├── components
│   ├── styles
├── data
│   ├── raw_data.csv
│   ├── processed_data.csv
├── models
│   ├── final_model.pkl
├── mlruns
│   ├── mlflow artifacts
├── Dockerfile
├── docker-compose.yml
├── kubernetes
│   ├── deployment.yaml
│   ├── service.yaml
├── requirements.txt
├── README.md

Tech Stack

Machine Learning
Sklearn, TensorFlow/Keras, Pandas, NumPy

Backend
FastAPI, Pydantic, Uvicorn

Frontend
React, Axios, TailwindCSS

DevOps
Docker, Kubernetes, Prometheus, Grafana, MLflow, GitHub Actions

Setup Instructions

1. Clone the repository

git clone https://github.com/iamarifalam/fraud-detection-system.gitcd fraud-detection-system

2. Set up the backend

cd backendpython3 -m venv venvsource venv/bin/activatepip install -r requirements.txtpython train_model.pyuvicorn main:app --reload --port 8002

3. Frontend setup

cd frontendnpm installnpm run dev

4. Docker

docker-compose up --build

5. Kubernetes

kubectl apply -f kubernetes/deployment.yamlkubectl apply -f kubernetes/service.yaml

6. MLflow Tracking

Run MLflow locally:
mlflow ui --port 5000

Access at:http://localhost:5000

7. Monitoring with Prometheus + Grafana

Prometheus runs in docker-compose setup
Access Prometheus at http://localhost:9090
Grafana dashboards available on port 3000

Deployment Tips

All services run on Docker and Kubernetes
GitHub Actions file is configured for CI/CD pipeline
Environment variables can be configured in .env file
Security and performance optimizations can be added as needed

Author

Arif Alam
Portfolio: https://iamarifalam.github.io
LinkedIn: https://linkedin.com/in/iamarifalam
GitHub: https://github.com/iamarifalam

License

This project is open-source under the MIT License
