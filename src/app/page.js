// src/app/page.js
import BannerHero     from '../components/BannerHero';
import CategorySlider from '../components/CategorySlider';
import { CATEGORIES } from '../data/products';

export const metadata = {
  title: 'Duygu Ambalaj Gebze',
  description:
    'Kiloyla poşetlerden doğum günü ürünlerine kadar geniş ambalaj malzemeleri yelpazesi.',
};

export default function Home() {
  return (
    <>
      {/* 1) Sadece Mağaza Önü Görseli */}
      <BannerHero />

      {/* 2) Hakkımızda Bölümü */}
      <section className="container mx-auto py-12 text-center">
        <h2 className="font-sans font-semibold text-4xl md:text-6xl text-[#172f61] mb-4">
          Hakkımızda
        </h2>
        <p className="font-sans text-base md:text-lg text-[#172f61] mx-auto max-w-2xl">
          Duygu Ambalaj Gebze olarak ambalaj sektöründe uzun yıllardır hizmet veriyoruz.
          Poşetten doğum günü ürünlerine kadar geniş ürün yelpazemizle,
          kalite ve uygun fiyatı siz müşterilerimize bir arada sunuyoruz.
        </p>
      </section>

      {/* 3) Ürün Grupları */}
      <section className="bg-bgLight py-12">
        <div className="container mx-auto">
          <h2 className="font-sans font-semibold text-3xl text-[#172f61] text-center mb-6">
            Ürün Grupları
          </h2>
          <CategorySlider items={CATEGORIES} />
        </div>
      </section>
    </>
  );
}
