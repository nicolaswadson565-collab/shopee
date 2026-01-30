
import React from 'react';
import { MessageSquare, Store } from 'lucide-react';
import { SELLER_DATA } from '../constants';

const SellerInfo: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-sm shadow-sm flex flex-col md:flex-row gap-8 items-center">
      {/* Profile Info */}
      <div className="flex gap-4 items-center shrink-0 border-r border-gray-100 pr-8">
        <div className="relative">
          <img src={SELLER_DATA.logo} alt="Seller Logo" className="w-20 h-20 rounded-full border border-gray-200 object-cover" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#ee4d2d] text-white text-[9px] px-2 py-0.5 rounded-sm font-bold whitespace-nowrap">
            Indicado
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-medium">{SELLER_DATA.name}</h2>
          <span className="text-xs text-gray-500">Último Login {SELLER_DATA.lastLogin}</span>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 border border-[#ee4d2d] bg-[#ffeee8] text-[#ee4d2d] px-3 py-1.5 text-xs rounded-sm hover:bg-[#fff5f1]">
              <MessageSquare size={14} fill="currentColor" /> Conversar Agora
            </button>
            <button className="flex items-center gap-1 border border-gray-300 text-gray-700 px-3 py-1.5 text-xs rounded-sm hover:bg-gray-50">
              <Store size={14} /> Ver Página Da Loja
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="flex-1 grid grid-cols-3 gap-y-4 gap-x-12 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Avaliações</span>
          <span className="text-[#ee4d2d] font-medium">{SELLER_DATA.evaluations}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Taxa De Resposta Do Chat</span>
          <span className="text-[#ee4d2d] font-medium">{SELLER_DATA.chatResponseRate}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Loja Shopee Desde</span>
          <span className="text-[#ee4d2d] font-medium">{SELLER_DATA.joined}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Produtos</span>
          <span className="text-[#ee4d2d] font-medium">{SELLER_DATA.products}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 whitespace-nowrap">Geralmente Responde O Chat Em</span>
          <span className="text-[#ee4d2d] font-medium text-right ml-2">{SELLER_DATA.chatResponseTime}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Seguidores</span>
          <span className="text-[#ee4d2d] font-medium">{SELLER_DATA.followers}</span>
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;
