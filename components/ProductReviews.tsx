
import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import { PRODUCT_DATA } from '../constants';

const ProductReviews: React.FC = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm mt-4 p-5 md:p-8 mb-4 md:mb-12">
      <h2 className="text-lg md:text-xl text-gray-800 font-medium mb-5 md:mb-8 border-b border-gray-100 pb-4">
        Avaliações Do Produto
      </h2>

      {/* Reviews List */}
      <div className="flex flex-col">
        {PRODUCT_DATA.reviews.map((review) => (
          <div key={review.id} className="py-6 md:py-10 border-b border-gray-100 last:border-0 flex gap-4 md:gap-6">
            {/* User Avatar */}
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border border-gray-100">
              {review.avatar ? (
                <img src={review.avatar} alt={review.user} className="w-full h-full object-cover" />
              ) : (
                <div className="w-7 h-7 md:w-8 md:h-8 bg-gray-200 rounded-full" />
              )}
            </div>

            <div className="flex flex-col flex-1">
              <div className="flex flex-col mb-1.5">
                <span className="text-xs md:text-sm text-gray-800 font-medium">{review.user}</span>
                <div className="flex text-[#ee4d2d] mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill={i < review.rating ? "currentColor" : "none"} />
                  ))}
                </div>
              </div>
              <span className="text-[10px] md:text-xs text-gray-400 mb-3 md:mb-4">{review.date}</span>

              <p className="text-sm md:text-base text-gray-800 whitespace-pre-wrap leading-relaxed mb-4 md:mb-6">
                {review.comment}
              </p>

              {/* Media Section - Larger Images */}
              <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                {review.images.map((img, idx) => (
                  <div key={idx} className="w-20 h-20 md:w-32 md:h-32 border border-gray-100 rounded-sm overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                    <img src={img} className="w-full h-full object-cover" alt={`Review ${idx}`} />
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-gray-400 hover:text-[#ee4d2d] transition-colors cursor-pointer w-fit pb-2">
                <ThumbsUp size={16} />
                <span className="text-xs md:text-sm font-medium">{review.likes || "Útil?"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
