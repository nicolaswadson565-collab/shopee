
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  images: string[];
}

const ProductGallery: React.FC<Props> = ({ images }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
        <img 
          src={images[selectedIdx]} 
          alt="Product Main" 
          className="w-full h-full object-cover"
        />
        
        {/* Navigation Arrows */}
        <button 
          onClick={() => setSelectedIdx(prev => (prev > 0 ? prev - 1 : images.length - 1))}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 text-white p-1 rounded-full hover:bg-black/40"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => setSelectedIdx(prev => (prev < images.length - 1 ? prev + 1 : 0))}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 text-white p-1 rounded-full hover:bg-black/40"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-2">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            onMouseEnter={() => setSelectedIdx(idx)}
            className={`cursor-pointer aspect-square border-2 transition-all overflow-hidden ${selectedIdx === idx ? 'border-[#ee4d2d]' : 'border-transparent'}`}
          >
            <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
