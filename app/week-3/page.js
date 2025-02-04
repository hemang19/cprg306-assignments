import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}
