export default function Item({ name, quantity, category }) {
    return (
      <li className="p-4 border border-gray-300 rounded-lg shadow-sm bg-white">
        <p className="text-lg font-semibold text-black">{name}</p>
        <p className="text-gray-600">Quantity: {quantity}</p>
        <p className="text-sm text-gray-500">Category: {category}</p>
      </li>
    );
  }
  
  