import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-[#faf6f2] shadow">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="block">
          <Image
            src="/images/logo.png"
            alt="Duygu Ambalaj Gebze"
            width={180}
            height={60}
            priority
          />
        </Link>

        {/* Menü */}
        <ul className="flex gap-8 text-gray-800 font-medium">
          <li>
            <Link href="/" className="hover:text-primary">
              Anasayfa
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-primary">
              Ürünler
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-primary">
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
