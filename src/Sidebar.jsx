// Sidebar.jsx
import React, { useState } from "react";

const Sidebar = ({ onOptionClick }) => {
  const [expanded, setExpanded] = useState(false);

  const handleOptionClick = (option) => {
    setExpanded(false);
    onOptionClick(option);
  };

  return (
    <div
      className={`bg-gray-800 text-white w-16 left-0 top-0 transition-width duration-300 ${
        expanded ? "w-64" : "w-16"
      }`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="h-full flex flex-col justify-between py-8">
        <div>
          <a href="#" className="block px-3 py-2" onClick={() => handleOptionClick("recommended")}>
            {expanded ? "🌟 Recommended" : "🌟"}
          </a>
          <a href="#" className="block px-3 py-2" onClick={() => handleOptionClick("custom")}>
            {expanded ? "⚙️ Custom" : "⚙️"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
