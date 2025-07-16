import React from "react";
import Profile from "../assets/profile.jpeg";

const Awards = () => {
  return (
    <section className="w-full bg-black text-white flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-12">
      {/* Left Content */}
      <div className="flex-1 md:ml-12 md:pr-12 text-center md:text-left">
        <h1 className="font-bungee text-4xl md:text-7xl font-bold leading-tight mb-4">
            Abhishek Yadav
        </h1>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In quae
          debitis illo ab maxime quo dolorem cupiditate, blanditiis ducimus
          natus adipisci delectus fugit, provident odio perferendis voluptas
          officia labore dolores.
        </p>

        {/* Contact Details */}
        <div className="space-y-2 text-lg">
          <p>
            <span className="font-semibold text-amber-400">Email:</span>{" "}
            <a
              href="mailto:abhishek@example.com"
              className="hover:underline text-gray-200"
            >
              abhishek@example.com
            </a>
          </p>
          <p>
            <span className="font-semibold text-amber-400">Phone:</span>{" "}
            <a
              href="tel:+1234567890"
              className="hover:underline text-gray-200"
            >
              +1 234 567 890
            </a>
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 mt-8 md:mt-0 flex justify-end md:mr-12 pr-4">
        <div className="relative w-64 h-64 md:w-100 md:h-100 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
          <img
            src={Profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
