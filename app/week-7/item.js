export default function Item({ name, quantity, category }) {
    return (
      <li className="border p-2 rounded shadow mb-2">
        {name} ({quantity}) - {category}
      </li>
    );
  }
  