import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import RecommendedComponent from "./pages/recommended_component/RecommendedComponent";
import CustomRequestPage from "./pages/custom_request_page/CustomRequestPage";
import UserProfilingComponent from "./pages/recommended_component/UserProfilingComponent";

function App() {
  const [selectedOption, setSelectedOption] = useState("recommended");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar onOptionClick={handleOptionClick} />
        <div className="flex-1 p-4">
          {selectedOption === "recommended" && <UserProfilingComponent />}
          {selectedOption === "custom" && <CustomRequestPage />}
        </div>
      </div>
    </div>
  );
}

export default App;
