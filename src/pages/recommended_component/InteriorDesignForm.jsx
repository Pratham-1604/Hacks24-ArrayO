import React, { useState } from "react";
import axios from "axios";

const InteriorDesignForm = () => {
  const [formData, setFormData] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
  });

  const [generatedImage, setGeneratedImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Post the form data to a chatbot API endpoint
      const response = await axios.post(
        "http://127.0.0.1:5000/recommend_style",
        formData
      );

      // Assuming chatbotResponse.data.sentence contains the sentence you want to use
      const sentence = response.data.sentence;

      // Post the sentence to the image model API endpoint
      const imageResponse = await axios.post(
        "https://c073-35-197-62-82.ngrok-free.app/generate",
        {
          prompt: "create a room with " + sentence,
          neg_prompt: "",
        }
      );

      // Assuming imageResponse.data.generated_image contains the base64 encoded image
      const generatedImage = imageResponse.data.generated_image;

      // Set the generated image in the state
      setGeneratedImage(generatedImage);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleReset = () => {
    setFormData({
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
      q6: "",
    });
    setGeneratedImage(null);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-lg">
      {generatedImage ? (
        <>
          <img
            src={`data:image/png;base64,${generatedImage}`}
            alt="Generated"
            className="w-full"
          />
          <button
            onClick={handleReset}
            className="w-full bg-gray-500 text-white rounded px-4 py-2 mt-4 hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray active:bg-gray-800">
            Reset
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            How would you describe the atmosphere or mood you want to create in
            your home through the design?
            <input
              type="text"
              name="q1"
              value={formData.q1}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </label>

          <label className="block mb-4">
            How would you describe your personal design style, and how do you
            envision it being reflected in your home?
            <input
              type="text"
              name="q2"
              value={formData.q2}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </label>

          <label className="block mb-4">
            How do you want the colors in your home to make you feel?
            <input
              type="text"
              name="q3"
              value={formData.q3}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </label>

          <label className="block mb-4">
            Are there any natural elements (e.g., sunlight, plants, views) that
            you want to emphasize or integrate into the design?
            <textarea
              name="q4"
              value={formData.q4}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </label>

          <label className="block mb-4">
            Are there specific lighting preferences for different areas?
            <input
              type="text"
              name="q5"
              value={formData.q5}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </label>

          <label className="block mb-4">
            Are there any specific design themes or styles you have in mind?
            <input
              type="text"
              name="q6"
              value={formData.q6}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded px-4 py-2 mt-4 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default InteriorDesignForm;
