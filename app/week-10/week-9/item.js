export default function Item({ item, onSelect }) {
  return (
    <li
      onClick={() => onSelect(item)}
      style={{
        cursor: "pointer",
        border: "1px solid #ccc",
        padding: "8px",
        margin: "4px 0",
        borderRadius: "4px",
      }}
    >
      {item.name}, {item.quantity} - {item.category}
    </li>
  );
}
