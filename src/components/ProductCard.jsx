// src/components/ProductCard.jsx
'use client';

import Image from 'next/image';

export default function ProductCard({ name, desc, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Görsel kapsayıcısı: yüksekliği artırıldı */}
      <div className="relative w-full h-56 md:h-64 flex items-center justify-center bg-gray-50">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Metin kapsayıcısı */}
      <div className="p-4 flex flex-col items-center">
        <h3 className="text-lg font-semibold text-center">{name}</h3>
        {desc && (
          <p className="mt-2 text-sm text-gray-600 text-center">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}
