"use client"; // Enables client-side rendering

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 border rounded-lg shadow-md bg-white">
      <p className="text-black">Quantity: {quantity}</p>

      <div className="flex gap-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded ${
            quantity === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-red-500 hover:bg-red-600 text-white"
          }`}
        >
          -
        </button>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded ${
            quantity === 20 ? "bg-gray-300 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 text-white"
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
}
