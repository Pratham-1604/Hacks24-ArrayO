import React, { useState } from 'react';
import axios from 'axios';
import RecommendedComponent from './RecommendedComponent'; // Import your RecommendedComponent here
import InteriorDesignForm from './InteriorDesignForm';

export default function UserProfilingComponent() {
  const [formData, setFormData] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    // ... Add other form fields based on your questions
  });

  const [viewType, setViewType] = useState('popular'); // 'popular' or 'personal'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Post the form data to a mock API endpoint (replace with your own)
      const response = await axios.post('http://127.0.0.1:5000/recommend_style', formData);

      // Handle success or provide user feedback
      console.log('Form data submitted successfully:', response.data);
    } catch (error) {
      // Handle errors or provide user feedback
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setViewType('popular')}
          className={`bg-blue-500 text-white rounded px-4 py-2 ${
            viewType === 'popular' ? 'bg-blue-700' : ''
          }`}
        >
          Popular
        </button>
        <button
          onClick={() => setViewType('personal')}
          className={`bg-blue-500 text-white rounded px-4 py-2 ${
            viewType === 'personal' ? 'bg-blue-700' : ''
          }`}
        >
          Personal
        </button>
      </div>

      {viewType === 'popular' && <RecommendedComponent />}

      {viewType === 'personal' && (
        <InteriorDesignForm />  
      )}
    </div>
  );
}
