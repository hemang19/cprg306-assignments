"use client";

import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

export default function ShoppingList() {
  const { user } = useUserAuth();
  const router = useRouter();

  if (!user) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Access Denied</h2>
        <p>You must be logged in to view this page.</p>
        <button onClick={() => router.push("/week-9")}>Go to Login</button>
      </div>
    );
  }

  return <h1>Shopping List Page (Protected)</h1>;
}
