"use client";  // Mark as a client component

import { useSearchParams } from 'next/navigation';

export default function Dashboard() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');  // Get the email parameter from the URL

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-header">Dashboard</h2>
      <div className="content">
        <div className="email-display">
          <p>Your email: {email}</p> {/* Display the email */}
        </div>
      </div>
    </div>
  );
}
