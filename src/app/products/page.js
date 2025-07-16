// src/app/products/page.js
import CategoryCard from '../../components/CategoryCard'
// Mutlaka data/products.js’den içe aktarın:
import { CATEGORIES, ALL_PRODUCTS } from '../../data/products'

export const metadata = {
  title: 'Ürünler | Duygu Ambalaj Gebze',
  description: 'Kategori bazında ürünlerimizi inceleyin.',
}

export default function ProductsPage() {
  // Her kategori için ürün sayısını hesaplayan fonksiyon
  const countFor = (slug) =>
    ALL_PRODUCTS.filter(p => p.category === slug).length

  return (
    <section className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Ürün Kategorilerimiz
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {CATEGORIES.map(cat => (
          <CategoryCard
            key={cat.slug}
            name={cat.name}
            image={cat.image}
            count={countFor(cat.slug)}
            href={`/products/${cat.slug}`}
          />
        ))}
      </div>
    </section>
  )
}
