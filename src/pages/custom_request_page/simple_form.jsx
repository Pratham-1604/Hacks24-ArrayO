import React, { useState } from 'react';
import axios from 'axios';

const SimpleForm = () => {
  const [textInput, setTextInput] = useState('');

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      // Post the form data to your API endpoint
      const response = await axios.post('your-api-endpoint', {
        prompt: textInput,
      });
  
      // Handle success or provide user feedback
      console.log('Text submitted successfully:', response.data);
    } catch (error) {
      // Handle errors or provide user feedback
      console.error('Error submitting text:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-lg">
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Enter Prompt:
          <textarea
            className="w-full border rounded px-3 py-2 mt-1"
            value={textInput}
            onChange={handleChange}
            rows={4} // Set the number of rows to show initially
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded px-4 py-2 mt-4 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
