import React, { useState } from 'react';
import axios from 'axios';

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
    <form className="mx-auto mt-8 p-4 bg-white rounded shadow-lg" onSubmit={handleSubmit}>
      <label className="block mb-2">
        How would you describe the atmosphere or mood you want to create in your home through the design?
        <input
          className="w-full border rounded px-3 py-2 mt-1"
          type="text"
          name="q1"
          value={formData.q1}
          onChange={handleChange}
        />
      </label>

      <label className="block mb-2">
        How would you describe your personal design style, and how do you envision it being reflected in your home?
        <input
          className="w-full border rounded px-3 py-2 mt-1"
          type="text"
          name="q2"
          value={formData.q2}
          onChange={handleChange}
        />
      </label>

      <label className="block mb-2">
        How do you want the colors in your home to make you feel?
        <input
          className="w-full border rounded px-3 py-2 mt-1"
          type="text"
          name="q3"
          value={formData.q3}
          onChange={handleChange}
        />
      </label>

      <label className="block mb-2">
        Are there any natural elements (e.g., sunlight, plants, views) that you want to emphasize or integrate into the design?
        <textarea
          className="w-full border rounded px-3 py-2 mt-1"
          name="q4"
          value={formData.q4}
          onChange={handleChange}
        />
      </label>

      <label className="block mb-2">
        Are there specific lighting preferences for different areas?
        <input
          className="w-full border rounded px-3 py-2 mt-1"
          type="text"
          name="q5"
          value={formData.q5}
          onChange={handleChange}
        />
      </label>

      <label className="block mb-2">
        Are there any specific design themes or styles you have in mind?
        <input
          className="w-full border rounded px-3 py-2 mt-1"
          type="text"
          name="q6"
          value={formData.q6}
          onChange={handleChange}
        />
      </label>

      {/* Add more form fields based on your questions */}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white rounded px-4 py-2 mt-4 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
