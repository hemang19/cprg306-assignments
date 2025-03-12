"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  // Initialize state with items data
  const [items, setItems] = useState(itemsData);

  // Function to add a new item to the list
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      {/* Pass event handler and items to components */}
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
