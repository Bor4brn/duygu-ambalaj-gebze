// src/app/contact/page.js
export const metadata = {
  title: 'İletişim | Duygu Ambalaj Gebze',
  description: 'Bize e-posta, telefon veya sosyal medya üzerinden ulaşın.',
};

export default function ContactPage() {
  return (
    <section className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-semibold text-center mb-8">İletişim</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* İletişim Bilgileri */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">E-posta</h2>
            <a
              href="mailto:bayazitbaran@hotmail.com"
              className="text-primary hover:underline"
            >
              bayazitbaran@hotmail.com
            </a>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Telefon</h2>
            <a
              href="tel:02626464140"
              className="text-primary hover:underline"
            >
              0262 646 4140
            </a>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Adres</h2>
            <address className="not-italic text-gray-700">
              Hacı Halil Mahallesi<br/>
              Zübeyde Hanım Caddesi No: 35<br/>
              Gebze, Kocaeli
            </address>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Instagram</h2>
            <a
              href="https://www.instagram.com/duyguambalaj_market?igsh=NTIwOTBjenlnbzBn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @duyguambalaj_market
            </a>
          </div>
        </div>

        {/* Harita */}
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?width=600&height=450&hl=tr&q=Hacı%20Halil%20Mahallesi%20Zübeyde%20Hanım%20Caddesi%20No%3A35%20Gebze%2C%20Kocaeli&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
