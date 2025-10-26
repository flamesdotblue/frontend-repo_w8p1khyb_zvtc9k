import React from 'react';
import { Star, Heart, Check, Phone, Mail, MapPin } from 'lucide-react';

const features = [
  {
    title: 'Strength & Conditioning',
    desc: 'Progressive lifting plans with expert coaching to build strength safely.',
    icon: <Check className="h-5 w-5 text-pink-600" />,
    color: 'from-pink-50 to-rose-50',
  },
  {
    title: 'Mobility & Recovery',
    desc: 'Guided mobility flows and recovery protocols to keep you moving.',
    icon: <Heart className="h-5 w-5 text-pink-600" />,
    color: 'from-rose-50 to-fuchsia-50',
  },
  {
    title: 'Metabolic Burn',
    desc: 'High-energy sessions designed to torch calories and boost endurance.',
    icon: <Star className="h-5 w-5 text-pink-600" />,
    color: 'from-fuchsia-50 to-pink-50',
  },
];

const Highlights = () => {
  return (
    <section id="programs" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            Programs built for real life
          </h2>
          <p className="mt-3 text-gray-600">
            Thoughtfully designed training tracks that meet you where you are and grow with you.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className={`rounded-2xl bg-gradient-to-br ${f.color} p-6 border border-pink-100 shadow-sm`}>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-white grid place-items-center border border-pink-100 shadow-sm">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
                  <p className="mt-1 text-gray-600">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="pricing" className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl p-8 bg-gradient-to-br from-white to-pink-50 border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-900">Holiday Special</h3>
            <p className="mt-2 text-gray-600">Join before Dec 31 and lock in 50% off your first 3 months.</p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-pink-600" /> Unlimited classes</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-pink-600" /> Personalized plan</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-pink-600" /> 24/7 gym access</li>
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#join" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-pink-500 text-white font-semibold shadow-sm hover:bg-pink-600 transition">Claim Offer</a>
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-gray-800 font-semibold border border-pink-200 hover:bg-pink-50 transition">Talk to a Coach</a>
            </div>
          </div>

          <div id="contact" className="rounded-2xl p-8 bg-white border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-900">Say hello</h3>
            <p className="mt-2 text-gray-600">We love meeting new members. Reach out and we’ll get you set up in minutes.</p>
            <div className="mt-6 space-y-3 text-gray-700">
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-pink-600" /> (555) 123-4567</div>
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-pink-600" /> hello@bodylabfitness.com</div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-pink-600" /> 123 Pastel Ave, Fit City</div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-pink-100 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} BodyLabFitness. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Highlights;
