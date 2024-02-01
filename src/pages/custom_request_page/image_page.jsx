import React, { useState } from "react";
import axios from "axios";

const ImageGenerator = () => {
  const [textInput, setTextInput] = useState("");
  const [generatedImage, setGeneratedImage] = useState();
  const [imageArray, setImageArray] = useState([]);
  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post the form data to your API endpoint
      const response = await axios.post(
        "https://c073-35-197-62-82.ngrok-free.app/generate",
        {
          prompt: textInput,
          neg_prompt: "",
        }
      );

      // Handle success and update the state with the generated image
      setGeneratedImage(response.data.generated_image);
      setImageArray(response.data.image_array);
    } catch (error) {
      // Handle errors or provide user feedback
      console.error("Error submitting text:", error);
    }
  };

  const handleColorChange = async (color) => {
    try {
      // Post the form data to your API endpoint
      const response = await axios.post(
        "https://0bba-34-125-77-206.ngrok-free.app/" + color,
        {
          image_array: imageArray,
        }
      );

      // Handle success and update the state with the generated image
      setGeneratedImage(response.data.generated_image);
      setImageArray(response.data.image_array);
    } catch (error) {
      // Handle errors or provide user feedback
      console.error("Error submitting text:", error);
    }
  };

  const handleResetImage = () => {
    setGeneratedImage(null);
    setTextInput("");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-lg">
      {generatedImage && (
        <>
          <img
            src={`data:image/png;base64,${generatedImage}`}
            alt="Generated"
            className="w-full"
          />
          <div className="mt-4">
            <p>Change design to the following color:</p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleColorChange("green")}
                className="bg-green-500 text-white rounded px-4 py-2 flex-1">
                Green
              </button>
              <button
                onClick={() => handleColorChange("wooden")}
                className="bg-stone-500 text-black rounded px-4 py-2 flex-1">
                Wooden Brown
              </button>
              <button
                onClick={() => handleColorChange("marble")}
                className=" text-black rounded px-4 py-2 flex-1">
                Marble White
              </button>
            </div>
            <button
              onClick={handleResetImage}
              className="mt-4 bg-red-500 text-white rounded px-4 py-2">
              Reset Image
            </button>
          </div>
        </>
      )}
      {!generatedImage && (
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Enter Prompt:
            <textarea
              className="w-full border rounded px-3 py-2 mt-1"
              value={textInput}
              onChange={handleChange}
              rows={4}
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

export default ImageGenerator;
