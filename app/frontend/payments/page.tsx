'use client';

import { useEffect, useState } from "react";

// Define TypeScript type for payments
type Payment = {
  _id: string;
  tenantName: string;
  amount: number;
  status: "pending" | "paid" | "failed";
};

export default function PaymentsPage() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data with error handling
    const fetchPayments = async () => {
      try {
        const res = await fetch("/api/rent");
        if (!res.ok) {
          throw new Error(`Failed to fetch payments: ${res.statusText}`);
        }
        const data = await res.json();
        setPayments(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  // Format currency using Intl
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Payment History</h2>

      {/* Loading State */}
      {loading && <p>Loading payments...</p>}

      {/* Error State */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Empty State */}
      {!loading && payments.length === 0 && !error && (
        <p className="text-gray-500">No payments found.</p>
      )}

      {/* Render Payments */}
      <ul className="mt-4">
        {payments.map((payment) => (
          <li
            key={payment._id}
            className="border p-2 my-2 rounded bg-white shadow"
          >
            <div className="flex justify-between">
              <span>
                <strong>Tenant:</strong> {payment.tenantName}
              </span>
              <span>
                <strong>Amount:</strong> {formatCurrency(payment.amount)}
              </span>
              <span>
                <strong>Status:</strong> {payment.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
