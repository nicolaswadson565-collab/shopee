
import React, { useState, useEffect } from 'react';

const FlashSaleBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 30,
    seconds: 9
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }

        let newS = prev.seconds - 1;
        let newM = prev.minutes;
        let newH = prev.hours;

        if (newS < 0) {
          newS = 59;
          newM -= 1;
        }
        if (newM < 0) {
          newM = 59;
          newH -= 1;
        }

        return { hours: newH, minutes: newM, seconds: newS };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="bg-gradient-to-r from-[#f53d2d] to-[#f63] h-10 flex items-center justify-between px-3">
      <div className="flex items-center gap-1.5">
        <span className="text-white font-black text-sm tracking-tight italic uppercase">
          Ofertas Re
          <span className="relative inline-flex items-center">
            <span className="text-[#ffcc00] inline-block -mt-1 scale-125">⚡</span>
            <span>ámpago</span>
          </span>
        </span>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-white text-[10px] font-bold uppercase tracking-tighter">Termina em</span>
        <div className="flex items-center gap-1">
          <div className="bg-black text-white font-bold text-xs px-1 py-0.5 rounded-sm min-w-[20px] text-center">
            {format(timeLeft.hours)}
          </div>
          <span className="text-white font-bold text-xs">:</span>
          <div className="bg-black text-white font-bold text-xs px-1 py-0.5 rounded-sm min-w-[20px] text-center">
            {format(timeLeft.minutes)}
          </div>
          <span className="text-white font-bold text-xs">:</span>
          <div className="bg-black text-white font-bold text-xs px-1 py-0.5 rounded-sm min-w-[20px] text-center">
            {format(timeLeft.seconds)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleBanner;
