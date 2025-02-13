"use client";

import React, { useState } from "react";

// Define the MenuItem interface
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  veg: boolean;
}

// Props interface requires the items prop
export interface MenuListProps {
  items: MenuItem[];
}

const MenuList: React.FC<MenuListProps> = ({ items }) => {
  // Initialize quantities for each menu item.
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    items.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );

  const handleQuantityChange = (id: number, amount: number) => {
    setQuantities((prev) => {
      const newQty = (prev[id] || 0) + amount;
      return {
        ...prev,
        [id]: newQty < 0 ? 0 : newQty,
      };
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-lg font-semibold mb-4">Soups</h2>
      <div className="space-y-4">
        {items.map((item) => {
          const qty = quantities[item.id] || 0;
          return (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center bg-white border rounded-lg shadow-md overflow-hidden"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full md:w-60 object-cover"
              />

              {/* Content */}
              <div className="flex flex-col justify-between p-4 flex-1">
                <div className="flex items-center space-x-2">
                  <span
                    className={`h-4 w-4 border-2 ${
                      item.veg
                        ? "border-green-600 bg-green-200"
                        : "border-red-600 bg-red-200"
                    } rounded-full`}
                  ></span>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>

                {/* Quantity UI */}
                <div className="mt-3">
                  {qty === 0 ? (
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-300 transition"
                    >
                      Add
                    </button>
                  ) : (
                    <div className="flex items-center border border-gray-300 rounded-lg p-1 w-fit">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="px-3 py-1 text-lg font-semibold border-r border-gray-300 hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="px-5 text-lg font-semibold">{qty}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="px-3 py-1 text-lg font-semibold border-l border-gray-300 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Price */}
              <div className="p-4 text-right font-semibold text-gray-700">
                ₹{" "}
                {qty === 0
                  ? item.price.toFixed(2)
                  : (item.price * qty).toFixed(2)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuList;
