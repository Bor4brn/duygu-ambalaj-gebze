// src/app/products/[slug]/page.js
import ProductCard from '../../../components/ProductCard'
import Link        from 'next/link'
import { CATEGORIES, ALL_PRODUCTS } from '../../../data/products'

export async function generateStaticParams() {
  return CATEGORIES.map(cat => ({ slug: cat.slug }))
}

export default function CategoryPage({ params }) {
  const { slug } = params
  const category = CATEGORIES.find(c => c.slug === slug)
  if (!category) return <p>Kategori bulunamadı.</p>

  const products = ALL_PRODUCTS.filter(p => p.category === slug)

  return (
    <section className="container mx-auto py-12">
      {/* Geri Dön */}
      <Link href="/products" className="text-primary hover:underline mb-4 block">
        ← Tüm Kategoriler
      </Link>

      {/* Kategori Başlığı */}
      <h1 className="text-3xl font-semibold text-center mb-8">
        {category.name}
      </h1>

      {/* Ürün Listesi */}
      {products.length === 0 ? (
        <p className="text-center text-gray-600">
          Bu kategoride henüz ürün bulunmuyor.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(prod => (
            <ProductCard
              key={prod.id}
              name={prod.name}
              desc={prod.desc}
              image={prod.image || '/images/placeholder.jpg'}
            />
          ))}
        </div>
      )}
    </section>
  )
}
