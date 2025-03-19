"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !category) {
      alert("Please fill out all fields.");
      return;
    }

    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      quantity,
      category,
    };

    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        className="border w-full p-2 rounded placeholder-purple-600"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
        className="border w-full p-2 rounded placeholder-purple-600"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        className="border w-full p-2 rounded placeholder-purple-600"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Item
      </button>
    </form>
  );
}
