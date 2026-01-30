
import React from 'react';
import { Search, ShoppingCart, Bell, HelpCircle, Globe, Facebook, Instagram, Twitter } from 'lucide-react';

interface HeaderProps {
  onCartClick?: () => void;
  cartCount?: number;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, cartCount = 1 }) => {
  return (
    <header className="bg-gradient-to-b from-[#f53d2d] to-[#f63] text-white sticky top-0 z-50">
      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden md:flex max-w-7xl mx-auto justify-between items-center h-8 text-xs px-4">
        <div className="flex gap-4 items-center">
          <a href="#" className="hover:opacity-80">Central do Vendedor</a>
          <span className="opacity-40">|</span>
          <a href="#" className="hover:opacity-80">Vender na Shopee</a>
          <span className="opacity-40">|</span>
          <a href="#" className="hover:opacity-80">Baixe o App</a>
          <span className="opacity-40">|</span>
          <div className="flex gap-2 items-center">
            <span>Siga-nos no</span>
            <Instagram size={14} />
            <Facebook size={14} />
            <Twitter size={14} />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <a href="#" className="flex items-center gap-1 hover:opacity-80"><Bell size={14} /> Notificações</a>
          <a href="#" className="flex items-center gap-1 hover:opacity-80"><HelpCircle size={14} /> Ajuda</a>
          <a href="#" className="flex items-center gap-1 hover:opacity-80"><Globe size={14} /> Português (BR)</a>
          <a href="#" className="font-bold hover:opacity-80">Cadastrar</a>
          <span className="opacity-40">|</span>
          <a href="#" className="font-bold hover:opacity-80">Entre</a>
        </div>
      </div>

      {/* Main Search Bar */}
      <div className="max-w-7xl mx-auto px-2 md:px-4 py-2 md:py-4 flex items-center justify-between gap-2 md:gap-4">
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <img src="/logobranca.webp" alt="Shopee Logo" className="h-8 md:h-12 w-auto object-contain" />
        </div>

        <div className="flex-1">
          <div className="relative flex bg-white rounded-sm p-1 shadow-sm">
            <input
              type="text"
              placeholder="Buscar na Shopee"
              className="flex-1 px-2 md:px-4 py-1.5 md:py-2 text-gray-800 outline-none text-sm"
            />
            <button className="bg-[#fb5533] px-3 md:px-6 py-1 md:py-2 rounded-sm hover:opacity-90 transition-opacity">
              <Search size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Cart Icon */}
        <div
          onClick={onCartClick}
          className="relative cursor-pointer p-1 md:p-2 group"
        >
          <ShoppingCart size={24} className="md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 bg-white text-[#ee4d2d] text-[8px] md:text-[10px] px-1 md:px-1.5 py-0 md:py-0.5 rounded-full font-bold border border-[#ee4d2d]">
            {cartCount}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
