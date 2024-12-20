"use client";  // Mark this as a client component

import { useSearchParams } from 'next/navigation';

export default function Dashboard() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');  // Access the email parameter from URL

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="welcome-message">
        <p>Welcome, {email}!</p>
      </div>
    </div>
  );
}
