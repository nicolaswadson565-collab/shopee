
import React, { useState } from 'react';
import { Search, ShoppingCart, MessageSquare, Plus, Minus, ChevronLeft, Trash2, Store, ChevronRight, Ticket, Truck, MessageCircle } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { CART_DATA, PRODUCT_DATA } from './constants';
import Header from './components/Header';
import ProductGallery from './components/ProductGallery';
import ProductDetails from './components/ProductDetails';
import ProductDescription from './components/ProductDescription';
import ProductReviews from './components/ProductReviews';
import Footer from './components/Footer';
import FlashSaleBanner from './components/FlashSaleBanner';

type ViewState = 'product' | 'cart';

const App: React.FC = () => {
  const [view, setView] = useState('product' as ViewState);
  const [items, setItems] = useState(CART_DATA.items);

  const handleAddToCart = () => {
    const exists = items.find(i => i.title === PRODUCT_DATA.title);
    if (!exists) {
      const newItem = {
        id: Date.now().toString(),
        title: PRODUCT_DATA.title,
        image: PRODUCT_DATA.images[0],
        variation: "Cristal Transparente",
        originalPrice: PRODUCT_DATA.originalPrice,
        price: PRODUCT_DATA.price,
        quantity: 1,
        hasFreeShipping: true,
        flashSaleEnds: "12:00:00"
      };
      setItems([newItem]);
    }
    goToCart();
  };

  const updateQty = (id: string, delta: number) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const handleBackToProduct = () => {
    setView('product');
    window.scrollTo(0, 0);
  };

  const goToCart = () => {
    setView('cart');
    window.scrollTo(0, 0);
  };

  const handleCheckout = () => {
    window.location.href = "https://seguro.lojaszenn.shop/checkout/Z-01PJR02BRL26";
  };

  const totalItemsCount = items.reduce((acc, i) => acc + i.quantity, 0);
  const totalPrice = items.reduce((acc, i) => acc + (i.price * i.quantity), 0);

  if (view === 'product') {
    return (
      <div className="min-h-screen bg-[#f5f5f5] flex flex-col relative pb-16 md:pb-0">
        <Header onCartClick={goToCart} cartCount={totalItemsCount} />

        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-0 md:px-4 py-0 md:py-4">
            <div className="bg-white rounded-sm shadow-sm flex flex-col md:flex-row gap-4 md:gap-10 p-4 md:p-6">
              <div className="w-full md:w-[450px] shrink-0">
                <ProductGallery images={PRODUCT_DATA.images} />
              </div>

              <div className="md:hidden -mx-4">
                <FlashSaleBanner />
              </div>

              <div className="flex-1">
                <ProductDetails
                  onAddToCart={handleAddToCart}
                  onBuyNow={handleAddToCart}
                />
              </div>
            </div>
            <div className="mt-2">
              <ProductDescription />
            </div>
            <div className="mt-2">
              <ProductReviews />
            </div>
          </div>
        </main>

        <Footer />

        {/* Barra de Ações Mobile (Fixa no rodapé) */}
        <div className="fixed bottom-0 left-0 right-0 h-14 bg-white border-t border-gray-100 flex md:hidden z-[1000] shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
          <button
            onClick={handleAddToCart}
            className="flex-1 flex flex-col items-center justify-center border-r border-gray-50 text-gray-600 active:bg-gray-50"
          >
            <div className="relative">
              <ShoppingCart size={20} color="#ee4d2d" />
              <Plus size={10} className="absolute -top-1 -right-2 bg-[#ee4d2d] text-white rounded-full p-0.5" strokeWidth={4} />
            </div>
            <span className="text-[10px] mt-0.5">Adicionar</span>
          </button>
          <button
            onClick={handleAddToCart}
            className="flex-[3.5] bg-[#ee4d2d] text-white font-bold text-sm active:bg-[#d73211] transition-colors"
          >
            Comprar Agora
          </button>
        </div>
        <Analytics />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] pb-32 flex flex-col">
      {/* Header Cart */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={handleBackToProduct} className="text-gray-500">
              <ChevronLeft size={24} />
            </button>
            <h1 className="text-lg font-medium">Carrinho de Compras ({totalItemsCount})</h1>
          </div>
          <button className="text-[#ee4d2d] text-sm">Editar</button>
        </div>
      </header>

      <main className="flex-1">
        {items.length === 0 ? (
          <div className="bg-white p-12 text-center flex flex-col items-center gap-4">
            <ShoppingCart size={64} className="text-gray-200" />
            <p className="text-gray-500">Seu carrinho está vazio</p>
            <button onClick={handleBackToProduct} className="text-[#ee4d2d] border border-[#ee4d2d] px-6 py-2 rounded-sm font-medium">Voltar às Compras</button>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="bg-white border-b border-gray-100">
              <div className="flex items-center justify-between p-3 border-b border-gray-50">
                <div className="flex items-center gap-3">
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#ee4d2d] rounded-[2px]" />
                  <div className="flex items-center gap-1.5">
                    <Store size={18} className="text-gray-600" />
                    <span className="text-sm font-medium text-gray-800">{CART_DATA.storeName}</span>
                    <ChevronRight size={14} className="text-gray-400" />
                  </div>
                </div>
                <button className="text-xs text-gray-500">Alterar</button>
              </div>

              {items.map(item => (
                <div key={item.id} className="p-3">
                  <div className="flex gap-3">
                    <div className="flex flex-col justify-center">
                      <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#ee4d2d] rounded-[2px]" />
                    </div>

                    <div className="w-20 h-20 bg-gray-50 rounded-sm overflow-hidden shrink-0 border border-gray-50">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex flex-col flex-1 min-w-0">
                      <h3 className="text-sm text-gray-800 line-clamp-2 leading-tight mb-1">
                        {item.title}
                      </h3>

                      <div className="flex items-center mb-2">
                        <div className="bg-[#003870] flex items-center rounded-sm overflow-hidden">
                          <div className="bg-white px-0.5 flex items-center justify-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" className="w-3 h-2" alt="Brasil" />
                          </div>
                          <span className="text-[10px] text-white font-bold px-1.5 py-0.5 whitespace-nowrap">
                            FRETE GRÁTIS acima de R$10
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gray-400 line-through text-xs">R${item.originalPrice.toFixed(2).replace('.', ',')}</span>
                        <span className="text-[#ee4d2d] text-sm font-medium">R${item.price.toFixed(2).replace('.', ',')}</span>
                      </div>

                      <div className="text-[#ee4d2d] text-[10px] mb-3">
                        Oferta relâmpago termina às {item.flashSaleEnds}
                      </div>

                      <div className="flex items-center border border-gray-200 w-fit rounded-sm h-7">
                        <button onClick={() => updateQty(item.id, -1)} className="px-2 text-gray-400 flex items-center justify-center border-r border-gray-200 h-full">
                          <Minus size={14} />
                        </button>
                        <div className="px-4 text-sm min-w-[32px] text-center font-normal">{item.quantity}</div>
                        <button onClick={() => updateQty(item.id, 1)} className="px-2 text-gray-400 flex items-center justify-center border-l border-gray-200 h-full">
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-between p-3 border-t border-gray-50 text-sm">
                <div className="flex items-center gap-3">
                  <Ticket size={20} className="text-[#ee4d2d]" />
                  <span className="text-gray-800">Adicione o código do cupom de loja</span>
                </div>
                <ChevronRight size={18} className="text-gray-300" />
              </div>

              <div className="bg-[#fcfcfc] flex items-start gap-3 p-3 text-[11px] leading-tight text-gray-600">
                <Truck size={18} className="text-[#00bfa5] shrink-0" />
                <p className="flex-1">
                  Frete grátis em fretes até R$20,00 para pedidos acima de R$10,00; Frete grátis em fretes até R$40,00 para pedidos...
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50">
        <div className="px-3 py-2.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#ee4d2d] rounded-[2px]" />
            <span className="text-sm font-medium text-gray-700">Tudo</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <div className="flex items-baseline gap-1">
                <span className="text-xs text-gray-700">Total</span>
                <span className="text-lg text-[#ee4d2d] font-bold">R${totalPrice.toFixed(2).replace('.', ',')}</span>
              </div>
              <span className="text-[10px] text-gray-400 -mt-1">Economizou R$101,10</span>
            </div>

            <button
              onClick={handleCheckout}
              disabled={items.length === 0}
              className="bg-[#ee4d2d] text-white px-8 py-2.5 rounded-sm font-bold text-sm disabled:bg-gray-200"
            >
              Continuar ({totalItemsCount})
            </button>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
};

export default App;
