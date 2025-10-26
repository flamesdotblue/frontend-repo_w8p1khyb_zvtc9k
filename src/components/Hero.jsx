import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[85vh] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center text-sm font-semibold text-pink-600 bg-pink-100 rounded-full px-3 py-1 mb-4">Pastel • Minimal • Powerful</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Train Smart at <span className="text-pink-600">BodyLabFitness</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            "Excuses dont kill the fat" — we do. Personalized programs, uplifting community, and results that last.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#join" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-pink-500 text-white font-semibold shadow-sm hover:bg-pink-600 transition">
              Start Free Trial
            </a>
            <a href="#programs" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-gray-800 font-semibold border border-pink-200 hover:bg-pink-50 transition">
              Explore Programs
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <div>No sign-up fee</div>
            <div>Cancel anytime</div>
            <div>Coach-led onboarding</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
