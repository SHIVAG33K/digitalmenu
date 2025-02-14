import React, { useState } from "react";
import { Search } from "lucide-react";

const Navbar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="flex flex-col p-4 border-b">
      {/* Top Bar */}
      <div className="flex items-center justify-between w-full">
        <h1 className="text-sm font-semibold">NICO YARD</h1>
        <Search className="h-5 w-5 cursor-pointer text-gray-500" />
      </div>

      {/* Food Count and Toggles Section */}
      <div className="flex items-center w-full mt-4 border rounded-lg shadow-sm bg-gray-100 p-2 justify-between">
        {/* Food Count */}
        <div className="flex items-center space-x-2 px-4 py-2">
          <span className="text-gray-600">🍽️</span>
          <span className="text-sm font-medium text-gray-700">23</span>
        </div>

        {/* Veg / Non-Veg Toggle */}
        <div className="flex space-x-2">
          {["Veg", "Non Veg"].map((item) => (
            <button
              key={item}
              className={`px-3 py-1 text-xs font-medium rounded-full border ${
                selectedCategory === item
                  ? "bg-gray-700 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
              onClick={() => setSelectedCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;