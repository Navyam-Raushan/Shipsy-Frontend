import React from "react";

export const About = () => {
  return (
    <div className="min-h-screen bg-[#111827] text-gray-300 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          About Us
        </h1>
        <p className="text-lg leading-8 mb-6 text-gray-400 text-center">
          Welcome to <span className="text-pink-400 font-semibold">StyleAura</span> – your ultimate destination for curated fashion and beauty products for both men and women.
        </p>
        <div className="space-y-6 text-gray-300">
          <p>
            At StyleAura, we believe that fashion is not just about clothing—it's a statement. Whether you're stepping into the boardroom, going out for a casual day, or prepping for a night out, our handpicked collection has you covered.
          </p>
          <p>
            Our men's line focuses on classic elegance and bold statements, while our women's section offers trendy, chic, and elegant pieces to empower your confidence and style.
          </p>
          <p>
            From premium grooming essentials to luxurious beauty products, we ensure that every item on our platform meets the highest standards in quality and style.
          </p>
          <p>
            We're more than just a brand—we're a community of fashion-forward thinkers who believe in self-expression, diversity, and authenticity.
          </p>
          <p>
            Thank you for choosing StyleAura. Stay bold, stay beautiful.
          </p>
        </div>
      </div>
    </div>
  );
};
