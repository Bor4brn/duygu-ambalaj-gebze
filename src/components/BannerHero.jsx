'use client';
import Image from 'next/image';

export default function BannerHero() {
  return (
    <div className="relative w-full h-96 md:h-[500px]">
      <Image
        src="/images/storefront.jpg"
        alt="Duygu Ambalaj Gebze Mağaza Önü"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
