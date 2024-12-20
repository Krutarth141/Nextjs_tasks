// app/page.js

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the login page when the app is accessed
    router.push("/login");
  }, [router]);

  return null; // No UI is needed since it automatically redirects
}
