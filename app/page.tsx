export const metadata = {
  title: "Home | Rent Payment Platform",
  description: "Manage and pay your rent online easily with Rent Payment Platform.",
};

export default function HomePage() {
  return (
    <div className="container mx-auto p-6 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-center mb-4">
        Welcome to the Rent Payment Platform
      </h1>
      <p className="text-lg text-gray-700 text-center mb-6">
        Manage and pay your rent online easily and securely.
      </p>

      {/* CTA Button */}
      <a
        href="/payments"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
      >
        Get Started
      </a>
    </div>
  );
}
