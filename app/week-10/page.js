"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Week 10</h1>

      {user ? (
        <>
          <p>Signed in as: {user.displayName || user.email}</p>
          <button onClick={firebaseSignOut}>Sign Out</button>
          <br />
          <Link href="/week-10/shopping-list">Go to Shopping List</Link>
        </>
      ) : (
        <>
          <p>You are not signed in.</p>
          <button onClick={gitHubSignIn}>Sign in with GitHub</button>
        </>
      )}
    </div>
  );
}
