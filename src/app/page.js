import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl font-bold text-gray-800">
        Welcome to our website
      </h1>
      <p className="text-gray-600 mt-2 text-lg">
        Explore our latest products and amazing offers.
      </p>

      <Link
        href="/products"
        className="mt-5 bg-amber-400 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-amber-500 transition"
      >
        Browse Products →
      </Link>
    </div>
  );
}

export default HomePage;
