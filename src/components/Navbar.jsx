import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-20 border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-pink-200" />
            <span className="font-extrabold text-xl tracking-tight text-gray-800">BodyLabFitness</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-gray-700">
            <a href="#programs" className="hover:text-gray-900 transition">Programs</a>
            <a href="#coaches" className="hover:text-gray-900 transition">Coaches</a>
            <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
            <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          </nav>
          <div className="flex items-center space-x-3">
            <a href="#join" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-pink-500 text-white font-semibold shadow-sm hover:bg-pink-600 transition">Join Now</a>
            <button className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-pink-200 text-gray-700 hover:bg-pink-50">Menu</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
