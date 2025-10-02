import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-white">OrbitDev</div>

          <div className="flex items-center space-x-8">
            <a
              href="/"
              className="text-white hover:text-gray-300 font-medium transition-colors"
            >
              Produk
            </a>
            <a
              href="/search"
              className="text-white hover:text-gray-300 font-medium transition-colors"
            >
              Search
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
