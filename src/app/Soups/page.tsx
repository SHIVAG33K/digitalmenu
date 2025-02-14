"use client";

import React, { useState } from "react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  veg: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Hungarian Mushroom Soup",
    description:
      "Rich & creamy loaded with flavors from Hungarian spices. Garnished with cream.",
    price: 189,
    image:
      "https://imgs.search.brave.com/jUJj50oHEkvEkLMPsPNPeHmrC_IF1Fn1_hUxCu8jP4k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2V0dGxlY3Vpc2lu/ZS5jb20vY2RuLWNn/aS9pbWFnZS93aWR0/aD03NTAsaGVpZ2h0/PTg3NCxmaXQ9Y3Jv/cCxxdWFsaXR5PTg1/L3VwbG9hZHMvcHJv/ZHVjdHMvZDcxYTMx/YzQ4NzQ0MDlhZTg5/NmQ0NjcyMzViMzhl/MTIuanBlZw",
    veg: true,
  },
  {
    id: 2,
    name: "Roasted Tomato & Red Pepper Soup",
    description:
      "Roasted tomatoes, garlic, red pepper blended together, served with pesto croutons.",
    price: 189,
    image:
      "https://imgs.search.brave.com/kwxuNYV0wIsBuBL8ecdcZZLVPZeXpU9sAoCK49oBFsU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2ltcGx5cmVjaXBl/cy5jb20vdGhtYi9X/dGFZcnh6Nm5RdDZ3/QlBfMU9udjRoM3Iy/UVU9LzE1MDB4MC9m/aWx0ZXJzOm5vX3Vw/c2NhbGUoKTptYXhf/Ynl0ZXMoMTUwMDAw/KTpzdHJpcF9pY2Mo/KS9fX29wdF9fYWJv/dXRjb21fX2NvZXVz/X19yZXNvdXJjZXNf/X2NvbnRlbnRfbWln/cmF0aW9uX19zaW1w/bHlfcmVjaXBlc19f/dXBsb2Fkc19fMjAx/OV9fMDhfX2NsYXNz/aWMtdG9tYXRvLXNv/dXAtbGVhZC01LTI1/ODE4NjA3OTJmODQz/OTA5MzJlMWU3OWI0/YWFkY2E4LmpwZw",
    veg: true,
  },
];

const MenuList: React.FC = () => {
  // Initialize quantities with 0 for each menu item.
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    menuItems.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
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
      <h2 className="text-2xl font-semibold mb-4">Soups</h2>
      <div className="space-y-4">
        {menuItems.map((item) => {
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
                      className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-blue-700 transition"
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
                      <span className="px-5 text-lg font-semibold">
                        {qty}
                      </span>
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
