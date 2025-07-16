import Link from 'next/link';

export default function Hero({
  title = 'Ambalaj Malzemelerinizin Güvencesi',
  subtitle = ' Ambalaj ve temizlik malzemeleri, doğum günü ve kına süsleri ve çok daha fazlası…',
  ctaText = 'Ürünlere Göz At',
  ctaHref = '/products'
}) {
  return (
    <section className="bg-primary text-white py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="mb-6">{subtitle}</p>
      <Link
        href={ctaHref}
        className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
      >
        {ctaText}
      </Link>
    </section>
  );
}
