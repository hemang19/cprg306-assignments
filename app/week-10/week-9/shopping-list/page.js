"use client";

import { useEffect, useState } from "react";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context"; 

export default function ShoppingList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", quantity: 1, category: "other" });

  const { user } = useUserAuth(); 

  // Load items from Firestore
  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  async function loadItems() {
    if (user) {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    }
  }

  // Handle input change
  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  }

  // Handle add item
  async function handleAddItem(event) {
    event.preventDefault();
    if (user && newItem.name.trim() !== "") {
      const newItemId = await addItem(user.uid, newItem);
      setItems([...items, { id: newItemId, ...newItem }]);
      setNewItem({ name: "", quantity: 1, category: "other" });
    }
  }

  return (
    <div className="shopping-list-container">
      <h1>Shopping List</h1>

      {/* Add Item Form */}
      <form onSubmit={handleAddItem} className="add-item-form">
        <input type="text" name="name" placeholder="Item Name" value={newItem.name} onChange={handleInputChange} required />
        <input type="number" name="quantity" placeholder="Quantity" value={newItem.quantity} onChange={handleInputChange} min="1" required />
        <select name="category" value={newItem.category} onChange={handleInputChange}>
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Add Item</button>
      </form>

      {/* Shopping List */}
      <ul className="item-list">
        {items.map((item) => (
          <li key={item.id}>{item.name} - {item.quantity} ({item.category})</li>
        ))}
      </ul>
    </div>
  );
}
