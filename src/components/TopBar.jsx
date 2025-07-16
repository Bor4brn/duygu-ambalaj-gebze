'use client'

import { FiClock, FiMapPin } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'

export default function TopBar() {
  return (
    <aside className="bg-slate-950 text-white text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-1 px-4">
        {/* Çalışma Saatleri & Adres */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-1 sm:space-y-0">
          <span className="flex items-center">
            <FiClock className="mr-1" /> 07:30 – 19:30
          </span>
          <span className="flex items-center">
            <FiMapPin className="mr-1" /> Hacı Halil Mah. Zübeyde Hanım Cad. No:35 Gebze, Kocaeli
          </span>
        </div>

        {/* Sosyal Medya */}
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <span>Bizi Takip Edin:</span>
          <a
            href="https://www.instagram.com/duyguambalaj_market?igsh=NTIwOTBjenlnbzBn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaInstagram className="text-xl" />
          </a>
        </div>
      </div>
    </aside>
  )
}
