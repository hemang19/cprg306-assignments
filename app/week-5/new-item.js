"use client"; // Enables client-side rendering

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log("Item added:", item);
    alert(`Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    // Reset fields
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-black">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold text-center mb-4">New Item</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Item Name Input */}
          <label className="font-semibold">Item Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border rounded text-black bg-white w-full"
          />

          {/* Quantity Controls */}
          <label className="font-semibold">Quantity:</label>
          <div className="flex gap-2 items-center">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className={`px-3 py-1 rounded ${quantity === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-red-500 hover:bg-red-600 text-white"}`}
            >
              -
            </button>
            <span className="px-4 py-2 border rounded bg-white text-black">{quantity}</span>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className={`px-3 py-1 rounded ${quantity === 20 ? "bg-gray-300 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 text-white"}`}
            >
              +
            </button>
          </div>

          {/* Category Select Dropdown */}
          <label className="font-semibold">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border rounded bg-white text-black w-full"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>

          {/* Submit Button */}
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}
