import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const PredictForm = () => {
  const [formData, setFormData] = useState({
    feature1: '',
    feature2: '',
    feature3: '',
    feature4: ''
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPrediction(null);

    try {
      const res = await axios.post('http://localhost:8002/predict', {
        ...formData
      });
      setPrediction(res.data.prediction);
    } catch (err) {
      console.error('Error:', err);
      setPrediction('Error making prediction');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-xl mt-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-4">🔍 Fraud Detection Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label className="block font-medium mb-1 capitalize">{key}</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          {loading ? <Loader2 className="animate-spin" /> : 'Predict'}
        </button>
      </form>

      {prediction && (
        <motion.div 
          className="mt-6 text-center p-4 border-t"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-lg font-semibold">
            Result ➤ {prediction === 1 ? '🚨 Fraud Detected' : '✅ Not Fraudulent'}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PredictForm;
