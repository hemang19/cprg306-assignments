"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Handle selecting an item
  const handleItemSelect = (item) => {
    // Clean up item name by removing quantity and emoji
    const cleanName = item.name
      .split(",")[0] // Remove quantity
      .replace(/[\u{1F300}-\u{1F6FF}]/gu, "") // Remove emoji
      .trim();
    setSelectedItemName(cleanName);
  };

  // Add new item to the list
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Left Section: New Item and Item List */}
      <div style={{ flex: 1 }}>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      {/* Right Section: Meal Ideas */}
      <div style={{ flex: 1 }}>
        {selectedItemName && (
          <MealIdeas ingredient={selectedItemName} />
        )}
      </div>
    </div>
  );
}
