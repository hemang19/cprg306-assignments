import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4">New Item</h1>
      <NewItem />
    </main>
  );
}

