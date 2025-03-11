'use client';

import { useState } from 'react';
import items from './items.json';
import Item from './item';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  // Sort the items based on sortBy state
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <button
        onClick={() => setSortBy('name')}
        style={{
          backgroundColor: sortBy === 'name' ? 'lightblue' : 'white',
          color: 'darkblue', // Dark blue text color
          marginRight: '10px',
          padding: '5px 10px',
          border: '1px solid darkblue',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Sort by Name
      </button>
      <button
        onClick={() => setSortBy('category')}
        style={{
          backgroundColor: sortBy === 'category' ? 'lightblue' : 'white',
          color: 'darkblue', // Dark blue text color
          padding: '5px 10px',
          border: '1px solid darkblue',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Sort by Category
      </button>

      <ul>
        {sortedItems.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
