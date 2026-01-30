
import React from 'react';
import { PRODUCT_DATA } from '../constants';

const ProductDescription: React.FC = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm p-3 md:p-5 mb-4">
      {/* Detalhes do Produto Section */}
      <div className="mb-6">
        <h2 className="text-base text-gray-800 font-normal mb-3 bg-[#fafafa] -mx-3 md:-mx-5 -mt-3 md:-mt-5 p-3 md:px-5 border-b border-gray-100">
          Detalhes Do Produto
        </h2>
        
        <div className="grid grid-cols-[120px_1fr] md:grid-cols-[180px_1fr] gap-y-2 text-[11px] md:text-sm">
          <div className="text-gray-400">Categoria</div>
          <div className="flex flex-wrap gap-1 items-center">
            <span className="text-blue-600 cursor-pointer hover:underline">Shopee</span>
            <span className="text-gray-300 mx-1">&gt;</span>
            <span className="text-blue-600 cursor-pointer hover:underline">Casa e Decoração</span>
            <span className="text-gray-300 mx-1">&gt;</span>
            <span className="text-blue-600 cursor-pointer hover:underline">Utensílios de Cozinha</span>
            <span className="text-gray-300 mx-1">&gt;</span>
            <span className="text-blue-600 cursor-pointer hover:underline">Cristais</span>
          </div>

          <div className="text-gray-400">Estoque Promocional</div>
          <div className="text-gray-800">Estoque disponível</div>

          <div className="text-gray-400">Estoque Total</div>
          <div className="text-gray-800">145</div>
          
          <div className="text-gray-400">Marca</div>
          <div className="text-blue-600 cursor-pointer hover:underline">Diamond Line</div>
          
          <div className="text-gray-400">Material</div>
          <div className="text-gray-800">Cristal Lapidado</div>
          
          <div className="text-gray-400">Quantidade</div>
          <div className="text-gray-800">4 Peças</div>
          
          <div className="text-gray-400">Tamanho Do Pacote</div>
          <div className="text-gray-800">G - Kit Completo</div>
          
          <div className="text-gray-400">Envio de</div>
          <div className="text-gray-800">São Paulo</div>
        </div>
      </div>

      {/* Descrição do Produto Section */}
      <div>
        <h2 className="text-base text-gray-800 font-normal mb-3 bg-[#fafafa] -mx-3 md:-mx-5 p-3 md:px-5 border-b border-gray-100">
          Descrição Do Produto
        </h2>

        <div className="text-[11px] md:text-sm text-gray-800 leading-snug whitespace-pre-wrap">
          <div 
            className="description-content"
            dangerouslySetInnerHTML={{ __html: PRODUCT_DATA.descriptionHtml }} 
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
