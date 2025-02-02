import React from "react";

const Products = () => {
  const toys = [
    { id: 1, name: "Toy Car", price: "$10" },
    { id: 2, name: "Action Figure", price: "$15" },
    { id: 3, name: "Building Blocks", price: "$20" },
    { id: 4, name: "Action Figure", price: "$16" },
    { id: 5, name: "Soft Toy Bear", price: "$18" },
    { id: 6, name: "Toy Bike", price: "$25" },
  ];

  return (
    <div className="text-center p-12 min-h-screen bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 text-white">
      <h1 className="text-4xl font-bold font-[Comic Sans MS] drop-shadow-md mb-6">
        Our Toys
      </h1>
      <div className="flex justify-center flex-wrap gap-6">
        {toys.map((toy) => (
          <div
            key={toy.id}
            className="w-[270px] p-6 bg-white rounded-lg shadow-lg text-center relative overflow-hidden transition transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={`/remotecar.jpg`}
              alt={toy.name}
              className="w-44 h-44 object-cover rounded-md mb-4 border-4 border-pink-500"
            />
            <h3 className="text-2xl font-bold text-pink-500 mb-2">{toy.name}</h3>
            <p className="text-lg font-semibold bg-pink-500 text-white px-4 py-2 rounded-md inline-block">
              {toy.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
