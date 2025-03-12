'use client';

import { useEffect, useState } from "react";

// Define TypeScript type for User data
type User = {
  name: string;
  email: string;
  joinedAt: string;
};

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch user data from the API route
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/user");
        if (!res.ok) {
          throw new Error(`Failed to load profile: ${res.statusText}`);
        }
        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>

      {/* Loading State */}
      {loading && <p>Loading profile...</p>}

      {/* Error State */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Render User Info */}
      {user && !loading && !error && (
        <div className="bg-white shadow-md rounded p-4">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Joined:</strong>{" "}
            {new Date(user.joinedAt).toLocaleDateString()}
          </p>
        </div>
      )}

      {/* Fallback State */}
      {!loading && !user && !error && (
        <p className="text-gray-500">No user data available.</p>
      )}
    </div>
  );
}
