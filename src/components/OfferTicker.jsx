import React from 'react';

const OfferTicker = () => {
  const items = [
    'Christmas Offer: 50% off first 3 months',
    'Free Body Composition Scan',
    'Bring a friend: 2-for-1 on Personal Training intro',
    'Limited time: Ends Dec 31',
  ];

  return (
    <div className="w-full bg-rose-100 text-rose-700 border-b border-rose-200">
      <div className="relative overflow-hidden">
        <div className="flex whitespace-nowrap" aria-hidden="true">
          <div className="ticker-track flex" style={{ animation: 'marquee 25s linear infinite' }}>
            {items.concat(items).map((text, idx) => (
              <div key={idx} className="px-6 py-2 text-sm font-medium flex items-center">
                <span className="mr-2">🎄</span>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track { width: 200%; }
      `}</style>
    </div>
  );
};

export default OfferTicker;
