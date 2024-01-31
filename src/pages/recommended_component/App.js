import React, { useState } from 'react';
import axios from 'axios';

const InteriorDesignForm = () => {
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
    <form onSubmit={handleSubmit}>
      <label>
        How would you describe the atmosphere or mood you want to create in your home through the design?
        <input type="text" name="q1" value={formData.q1} onChange={handleChange} />
      </label>
      <br />

      <label>
        How would you describe your personal design style, and how do you envision it being reflected in your home?
        <input type="text" name="q2" value={formData.q2} onChange={handleChange} />
      </label>
      <br />

      <label>
        How do you want the colors in your home to make you feel?
        <input type="text" name="q3" value={formData.q3} onChange={handleChange} />
      </label>
      <br />

      <label>
        Are there any natural elements (e.g., sunlight, plants, views) that you want to emphasize or integrate into the design?
        <textarea name="q4" value={formData.q4} onChange={handleChange} />
      </label>
      <br />

      <label>
        Are there specific lighting preferences for different areas?
        <input type="text" name="q5" value={formData.q5} onChange={handleChange} />
      </label>
      <br />

      <label>
       Are there any specific design themes or styles you have in mind?
        <input type="text" name="q6" value={formData.q6} onChange={handleChange} />
      </label>
      <br />

      {/* Add more form fields based on your questions */}

      <button type="submit">Submit</button>
    </form>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Interior Design Form</h1>
      <InteriorDesignForm />
    </div>
  );
}

export default App;
