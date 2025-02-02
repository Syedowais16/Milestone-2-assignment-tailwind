import React from "react";

const About = () => {
  return (
    <div className="text-center py-16 px-6 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
        About Owais Toy Store
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
        At Owais Toy Store, we believe in the magic of play. Our family-owned 
        business has been dedicated to bringing joy and learning to children of all ages. 
        From classic toys to the latest trends, we carefully curate our selection to 
        ensure the highest quality and safety standards.
      </p>

      <h2 className="text-3xl text-yellow-300 font-semibold mt-10 drop-shadow-md">
        Our Mission
      </h2>
      <p className="text-lg max-w-3xl mx-auto bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
        We strive to create a world where playtime is both fun and educational. Our collection 
        is designed to spark imagination, enhance creativity, and encourage problem-solving skills. 
        We believe that toys are more than just objects—they are tools for learning and growing.
      </p>

      <h2 className="text-3xl text-yellow-300 font-semibold mt-10 drop-shadow-md">
        Why Choose Us?
      </h2>
      <ul className="list-none max-w-2xl mx-auto mt-4 space-y-4">
        <li className="text-lg bg-white bg-opacity-30 p-3 rounded-lg shadow-md hover:scale-105 transition">
           High-quality and safe toys for kids of all ages.
        </li>
        <li className="text-lg bg-white bg-opacity-30 p-3 rounded-lg shadow-md hover:scale-105 transition">
           Toys that inspire creativity and learning.
        </li>
        <li className="text-lg bg-white bg-opacity-30 p-3 rounded-lg shadow-md hover:scale-105 transition">
           Family-owned with a passion for play.
        </li>
        <li className="text-lg bg-white bg-opacity-30 p-3 rounded-lg shadow-md hover:scale-105 transition">
           Fast and reliable delivery services.
        </li>
        <li className="text-lg bg-white bg-opacity-30 p-3 rounded-lg shadow-md hover:scale-105 transition">
           Trusted by thousands of happy parents.
        </li>
      </ul>

      <h2 className="text-3xl text-yellow-300 font-semibold mt-10 drop-shadow-md">
        Our Commitment to You
      </h2>
      <p className="text-lg max-w-3xl mx-auto bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
        We prioritize customer satisfaction by ensuring that each toy meets the highest 
        standards of safety and durability. Our friendly team is always here to help you 
        find the perfect toy for your child’s needs.
      </p>

      <h2 className="text-3xl text-yellow-300 font-semibold mt-10 drop-shadow-md">
        Come Visit Us!
      </h2>
      <p className="text-lg max-w-3xl mx-auto bg-white bg-opacity-20 p-4 rounded-lg shadow-md">
        Whether you're shopping online or visiting our store, we welcome you to 
        explore our amazing collection of toys. Let's make childhood memories together!  
      </p>
    </div>
  );
};

export default About;
