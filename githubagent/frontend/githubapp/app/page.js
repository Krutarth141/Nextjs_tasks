"use client"; // Add this directive at the top of the file

import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');
  const [days, setDays] = useState(7);
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSummary('');

    try {
      const response = await axios.post('http://localhost:5000/summarize', {
        owner,
        repo,
        days,
      });
      setSummary(response.data.summary);
    } catch (error) {
      console.error(error);
      setSummary('Failed to fetch summary. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>GitHub Repository Commit Summarizer</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <div>
          <label>Owner: </label>
          <input
            type="text"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            required
            style={{ margin: '0.5rem', padding: '0.5rem' }}
          />
        </div>
        <div>
          <label>Repository: </label>
          <input
            type="text"
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            required
            style={{ margin: '0.5rem', padding: '0.5rem' }}
          />
        </div>
        <div>
          <label>Days (Optional): </label>
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            style={{ margin: '0.5rem', padding: '0.5rem' }}
          />
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          {loading ? 'Loading...' : 'Get Summary'}
        </button>
      </form>
      {summary && (
        <div style={{ padding: '1rem', border: '1px solid #ccc' }}>
          <h2>Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}
