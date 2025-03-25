"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {!user ? (
        <>
          <h1>Login to Access Shopping List</h1>
          <button onClick={gitHubSignIn} style={{ padding: "10px", fontSize: "16px" }}>
            Login with GitHub
          </button>
        </>
      ) : (
        <>
          <h1>Welcome, {user.displayName}</h1>
          <p>{user.email}</p>
          <button onClick={firebaseSignOut} style={{ padding: "10px", fontSize: "16px" }}>
            Logout
          </button>
          <br />
          <Link href="/week-9/shopping-list">
            <button style={{ marginTop: "10px", padding: "10px", fontSize: "16px" }}>
              Go to Shopping List
            </button>
          </Link>
        </>
      )}
    </div>
  );
}
