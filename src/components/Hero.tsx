import React from 'react';
import logo from '../assets/cloudlogo.jpg'; // Replace with your image path

const Hero: React.FC = () => {
  return (
   <section
  id="hero"
  className="flex flex-col justify-start bg-white dark:bg-gray-950 px-4 py-6 sm:min-h-screen sm:items-center sm:justify-center"
>
  <div className="w-full max-w-7xl mx-auto">
    <div className="w-full rounded-2xl overflow-hidden shadow-2xl mt-5 max-h-74 sm:max-h-none sm:aspect-[16/9]">
      <img
        src={logo}
        alt="Tejas Mehar"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</section>

  );
};

export default Hero;
