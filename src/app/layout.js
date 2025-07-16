// src/app/layout.js
import './globals.css';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Duygu Ambalaj Gebze',
  description: 'Ambalaj malzemeleri ve doğum günü ürünleri',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        {/* (Varsa Google Fonts, meta etiketleri vs.) */}
      </head>
      <body className="bg-gray-50 text-gray-800">
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
