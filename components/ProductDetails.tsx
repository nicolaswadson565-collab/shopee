
import React, { useState, useMemo } from 'react';
import { Star, Truck, Plus, Minus, ShoppingCart } from 'lucide-react';
import { PRODUCT_DATA } from '../constants';

interface ProductDetailsProps {
  onAddToCart?: () => void;
  onBuyNow?: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ onAddToCart, onBuyNow }) => {
  const [quantity, setQuantity] = useState(1);

  // Regra: +3 a +5 dias da data atual real, consecutivamente até 2026
  const deliveryRange = useMemo(() => {
    const today = new Date();
    
    // Data Inicial (+3 dias)
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + 3);
    
    // Data Final (+5 dias)
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 5);

    const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    
    const startDay = startDate.getDate().toString().padStart(2, '0');
    const startMonth = months[startDate.getMonth()];
    
    const endDay = endDate.getDate().toString().padStart(2, '0');
    const endMonth = months[endDate.getMonth()];

    // Formato exato da imagem: DD/mes e DD/mes
    return `Receba entre ${startDay}/${startMonth} e ${endDay}/${endMonth}`;
  }, []);

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {/* Title Section */}
      <div>
        <div className="flex items-start gap-2">
          <span className="bg-[#ee4d2d] text-white text-[10px] font-bold px-1 py-0.5 rounded-sm mt-1 shrink-0">Indicado</span>
          <h1 className="text-lg md:text-xl font-medium leading-tight md:leading-7">
            {PRODUCT_DATA.title}
          </h1>
        </div>
        
        <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-2 md:mt-3 text-sm">
          <div className="flex items-center gap-1 text-[#ee4d2d] border-b border-[#ee4d2d] pb-0.5">
            <span className="font-medium underline">{PRODUCT_DATA.rating}</span>
            <div className="flex text-[#ee4d2d]">
              {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
            </div>
          </div>
          <div className="h-3 w-[1px] bg-gray-300"></div>
          <div className="border-b border-gray-300 pb-0.5">
            <span className="font-medium underline">{PRODUCT_DATA.reviewsCount}</span>
            <span className="text-gray-500 ml-1">Avaliações</span>
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="bg-[#fafafa] p-3 md:p-5 flex flex-col gap-2 rounded-sm">
        <div className="flex items-center gap-3">
          <span className="text-gray-400 line-through text-sm md:text-base">R${PRODUCT_DATA.originalPrice.toFixed(2).replace('.', ',')}</span>
          <span className="text-[#ee4d2d] text-2xl md:text-3xl font-medium">R${PRODUCT_DATA.price.toFixed(2).replace('.', ',')}</span>
          <span className="bg-[#ee4d2d] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">-{PRODUCT_DATA.discount}%</span>
        </div>
      </div>

      {/* Shipping Section */}
      <div className="grid grid-cols-[80px_1fr] md:grid-cols-[110px_1fr] gap-4 text-xs md:text-sm items-start">
        <div className="text-gray-500 uppercase">Frete</div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
             <div className="text-[#00bfa5]">
                <Truck size={20} />
             </div>
             <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-[#00bfa5] font-medium text-sm md:text-base">{deliveryRange}</span>
                </div>
                <div className="text-gray-400 text-xs mt-0.5">Frete Grátis</div>
             </div>
          </div>
        </div>
      </div>

      {/* Quantity */}
      <div className="grid grid-cols-[80px_1fr] md:grid-cols-[110px_1fr] gap-4 text-xs md:text-sm items-center">
        <div className="text-gray-500 uppercase">Quantidade</div>
        <div className="flex items-center gap-4">
          <div className="flex border border-gray-300">
            <button 
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="px-2 md:px-3 py-1 md:py-1.5 border-r border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <Minus size={14} />
            </button>
            <div className="px-3 md:px-5 py-1 md:py-1.5 min-w-[40px] md:min-w-[50px] text-center">{quantity}</div>
            <button 
              onClick={() => setQuantity(q => q + 1)}
              className="px-2 md:px-3 py-1 md:py-1.5 border-l border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <Plus size={14} />
            </button>
          </div>
          <span className="text-gray-500 hidden sm:inline">145 peças disponíveis</span>
        </div>
      </div>

      {/* Action Buttons (Desktop only) */}
      <div className="hidden md:flex gap-2 md:gap-4 pt-4">
        <button 
          onClick={onAddToCart}
          className="flex-1 flex items-center justify-center gap-2 h-10 md:h-12 border border-[#ee4d2d] bg-[#ffeee8] text-[#ee4d2d] hover:bg-[#fff5f1] transition-colors rounded-sm shadow-sm text-xs md:text-sm font-medium"
        >
          <ShoppingCart size={18} className="md:w-5 md:h-5" />
          <span>Adicionar Ao Carrinho</span>
        </button>
        <button 
          onClick={onBuyNow}
          className="flex-1 h-10 md:h-12 bg-[#ee4d2d] text-white font-medium hover:bg-[#d73211] transition-colors rounded-sm shadow-sm text-xs md:text-sm"
        >
          Comprar Agora
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
