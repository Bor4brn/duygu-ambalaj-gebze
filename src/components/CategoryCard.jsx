import Image from 'next/image'
import Link from 'next/link'

export default function CategoryCard({ name, image, count, href }) {
  return (
    <Link href={href}>
      <div className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition">
        {/* Görsel */}
        <div className="w-full h-48 relative">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            priority
          />
          {/* Sağ-alt köşedeki ürün sayısı */}
          <span className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
            {count} Ürün
          </span>
        </div>
        {/* Başlık */}
        <h3 className="mt-3 text-center font-semibold text-lg">{name}</h3>
      </div>
    </Link>
  )
}
