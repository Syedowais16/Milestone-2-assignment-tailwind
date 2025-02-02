import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className="text-center py-20 px-6 bg-gradient-to-r from-orange-400 to-yellow-300 text-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4">Welcome to Owais Toy Store!</h1>
        <p className="text-xl mb-6">Your one-stop shop for the best toys and fun-filled adventures!</p>
        <Link href="/products">
          <button className="bg-yellow-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:bg-yellow-600 transition duration-300">
            Shop Now
          </button>
        </Link>
      </div>

      <div className="py-16 px-6 text-center bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Featured Toys</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 w-80 text-center transition-transform transform hover:scale-105">
            <img src="/remotecar.jpg" alt="Toy 1" className="w-full rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold text-orange-500">Super Rocket Toy</h3>
            <p className="text-gray-600">Fun for kids of all ages!</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 w-80 text-center transition-transform transform hover:scale-105">
            <img src="/remotecar.jpg" alt="Toy 2" className="w-full rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold text-orange-500">Magic Puzzle</h3>
            <p className="text-gray-600">Enhance problem-solving skills!</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 w-80 text-center transition-transform transform hover:scale-105">
            <img src="/remotecar.jpg" alt="Toy 3" className="w-full rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold text-orange-500">Building Blocks Set</h3>
            <p className="text-gray-600">Great for creativity!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
