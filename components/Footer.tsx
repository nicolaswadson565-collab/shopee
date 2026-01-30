
import React from 'react';
import { Instagram, Facebook, Linkedin, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  const countries = [
    'Argentina', 'Singapura', 'Indonésia', 'Tailândia', 'Malásia', 'Vietnã', 'Filipinas', 'Brasil', 'México', 'Taiwan'
  ];

  return (
    <footer className="bg-[#fbfbfb] border-t border-gray-200 pt-8 md:pt-12 pb-24 md:pb-8 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 mb-12">
          {/* Customer Service */}
          <div>
            <h3 className="text-[10px] md:text-xs font-bold text-gray-800 uppercase mb-4">Atendimento ao Cliente</h3>
            <ul className="text-[10px] md:text-xs text-gray-500 flex flex-col gap-2">
              <li className="hover:text-[#ee4d2d] cursor-pointer">Central de Ajuda</li>
              <li className="hover:text-[#ee4d2d] cursor-pointer">Como Comprar</li>
              <li className="hover:text-[#ee4d2d] cursor-pointer">Métodos de Pagamento</li>
              <li className="hover:text-[#ee4d2d] cursor-pointer">Garantia Shopee</li>
              <li className="hover:text-[#ee4d2d] cursor-pointer">Devolução e Reembolso</li>
              <li className="hover:text-[#ee4d2d] cursor-pointer">Fale Conosco</li>
              <li className="hover:text-[#ee4d2d] cursor-pointer">Ouvidoria</li>
            </ul>
          </div>

          {/* About Shopee */}
          <div>
            <h3 className="text-[10px] md:text-xs font-bold text-gray-800 uppercase mb-4">Sobre a Shopee</h3>
            <ul className="text-[10px] md:text-xs text-gray-500 flex flex-col gap-2">
              <li className="hover:text-[#ee4d2d] cursor-pointer">Sobre Nós</li>
              <li className="hover:text-[#ee4d2d] cursor-pointer">Políticas</li>
              <li className="hover:text-[#ee4d2d] cursor-pointer">Privacidade</li>
              <li className="hover:text-[#ee4d2d] cursor-pointer">Afiliados</li>
              <li className="hover:text-[#ee4d2d] cursor-pointer">Motorista</li>
              <li className="hover:text-[#ee4d2d] cursor-pointer">Shopee Blog</li>
            </ul>
          </div>

          {/* Payment */}
          <div>
            <h3 className="text-[10px] md:text-xs font-bold text-gray-800 uppercase mb-4">Pagamento</h3>
            <div className="grid grid-cols-3 gap-1.5">
              {['VISA', 'Master', 'elo', 'Amex', 'Boleto', 'pix'].map((pay) => (
                <div key={pay} className="bg-white border border-gray-100 rounded-sm p-1 flex items-center justify-center shadow-sm h-6 md:h-7">
                  <span className="text-[7px] md:text-[9px] font-bold text-gray-400 uppercase">{pay}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div className="col-span-1">
            <h3 className="text-[10px] md:text-xs font-bold text-gray-800 uppercase mb-4">Siga-nos</h3>
            <ul className="text-[10px] md:text-xs text-gray-500 flex flex-col gap-2">
              <li className="flex items-center gap-2 hover:text-[#ee4d2d] cursor-pointer"><Instagram size={14} /> Instagram</li>
              <li className="flex items-center gap-2 hover:text-[#ee4d2d] cursor-pointer"><Facebook size={14} /> Facebook</li>
              <li className="flex items-center gap-2 hover:text-[#ee4d2d] cursor-pointer"><Linkedin size={14} /> LinkedIn</li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-200 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-[10px] md:text-xs text-gray-500 order-2 md:order-1">
            © 2026 Shopee. Todos os direitos reservados
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-2 md:gap-x-3 gap-y-1 text-[9px] md:text-xs text-gray-500 order-1 md:order-2">
            <span className="text-gray-800 font-medium w-full md:w-auto mb-1 md:mb-0">País e região:</span>
            {countries.map((country, idx) => (
              <React.Fragment key={country}>
                <span className="hover:text-[#ee4d2d] cursor-pointer">{country}</span>
                {idx < countries.length - 1 && <span className="text-gray-300 hidden md:inline">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Legal Info */}
        <div className="text-center text-[9px] md:text-xs text-gray-400 mt-6 md:mt-8 leading-relaxed max-w-4xl mx-auto px-4">
          CNPJ/MF nº 35.635.824/0001-12. Endereço: Av. Brigadeiro Faria Lima, 3732 - 22º e 23º andares, Itaim Bibi, São Paulo (SP), Brasil, 04538-132
        </div>
      </div>
    </footer>
  );
};

export default Footer;
