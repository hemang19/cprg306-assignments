import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        {items.map((item) => (
          <Item key={item.name} item={item} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
}
