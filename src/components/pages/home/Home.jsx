import React from "react";

const Home = () => {
  return (
    <>
      <section className="relative h-[80vh] flex items-center justify-start bg-black text-white">
        {/* Background Image */}
        <img
          src="/banner.jpg"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="uppercase text-sm tracking-widest mb-2">Introducing</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our Newest Arrivals
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We make things that work better and last longer. Our products solve
            real problems with clean design and honest materials.
          </p>
          <a
            href="/shop"
            className="inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Shop Now
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
