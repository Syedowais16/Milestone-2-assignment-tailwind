import React from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 text-center">
        <nav className="space-x-6">
          <Link href="/" className="text-lg hover:text-yellow-400">
            Home
          </Link>
          <Link href="/products" className="text-lg hover:text-yellow-400">
            Products
          </Link>
          <Link href="/about" className="text-lg hover:text-yellow-400">
            About
          </Link>
          <Link href="/contact" className="text-lg hover:text-yellow-400">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1 p-6 bg-gray-100">{children}</main>

      <footer className="text-center py-4 bg-gray-900 text-white">
        <p>© 2025 Owais Toy Store. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
