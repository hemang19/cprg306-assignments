import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
      <p className="mt-4 text-lg">
        <Link href="/week-2" className="text-blue-500 hover:underline">
          Go to Week 2 Assignment
        </Link>
      </p>
      <p className="mt-4 text-lg">
        <Link href="/week-3" className="text-green-500 hover:underline">
          Go to Week 3 Assignment
        </Link>
      </p>
      <p className="mt-4 text-lg">
        <Link href="/week-4" className="text-yellow-500 hover:underline">
          Go to Week 4 Assignment
        </Link>
      </p>
      <p className="mt-4 text-lg">
  <Link href="/week-5" className="text-purple-500 hover:underline">
    Go to Week 5 Assignment
  </Link>
</p>
    </main>
  );
}

