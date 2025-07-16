// src/data/products.js

// 1) Tüm ürünler (id alanlı versiyon, yeni eklemeler sıralı)
/* 
  Poşet Grubu: id 1–8
  Kağıt Grubu: id 9–13
  Temizlik Malz. Grubu: id 14–26
  Bardak Grubu: id 27–30
  Plastik Ürünler: id 31–34
  Köpük Tabaklar: id 35–38
  Mutfak Malzemeleri: id 39–45
  Sızdırmaz Kaplar: id 46–51
  Etkinlik Malzemeleri: id 52–61
  Doğum Günü Malz. & Süsleri: id 54– (kateg. içinde yer alıyor)
  Kına-Düğün Malz. & Süsleri: (henüz eklenmedi)
*/
export const ALL_PRODUCTS = [
  // Poşet Grubu
  { id: 1, name: 'Hışır Torba',       category: 'poset-grubu',    image: '/images/posetler/1.jpeg' },
  { id: 2, name: 'Battal Boy Poşet',       category: 'poset-grubu',    image: '/images/posetler/3.jpg' },
  { id: 3, name: 'Rulo Atlet Poşet',  category: 'poset-grubu',    image: '/images/posetler/4.jpg' },
  { id: 4, name: 'Naylon',             category: 'poset-grubu',    image: '/images/posetler/2.jpg' },
  { id: 5, name: 'Mağaza Poşeti',     category: 'poset-grubu',    image: '/images/posetler/5.jpg' },
  { id: 6, name: 'Hediye Poşeti',     category: 'poset-grubu',    image: '/images/posetler/6.jpg' },
  { id: 7, name: 'Kilitli Poşet',     category: 'poset-grubu',    image: '/images/posetler/7.jpg' },
  { id: 8, name: 'Kraft Poşet',       category: 'poset-grubu',    image: '/images/posetler/8.jpg' },

  // Kağıt Grubu
  { id: 9,  name: 'Sülfit Ambalaj Kağıdı',  category: 'kagit-grubu', image: '/images/kagitlar/1.jpg' },
  { id: 10, name: 'Pastane Kese Kağıdı',   category: 'kagit-grubu', image: '/images/kagitlar/2.jpg' },
  { id: 11, name: 'Kağıt Peçete',          category: 'kagit-grubu', image: '/images/kagitlar/3.jpeg' },
  { id: 12, name: 'Kağıt Havlu',           category: 'kagit-grubu', image: '/images/kagitlar/4.jpg' },
  { id: 13, name: 'Temizlik Kağıt Aparatı',category: 'kagit-grubu', image: '/images/kagitlar/5.jpg' },

  // Temizlik Malz. Grubu
  { id: 14, name: 'Çöp Poşetleri',            category: 'temizlik-grubu', image: '/images/temizlik/1.jpg' },
  { id: 15, name: 'Deterjanlar',              category: 'temizlik-grubu', image: '/images/temizlik/2.jpg' },
  { id: 16, name: 'Faraş',                    category: 'temizlik-grubu', image: '/images/temizlik/3.jpeg' },
  { id: 17, name: 'Vileda',                   category: 'temizlik-grubu', image: '/images/temizlik/4.jpg' },
  { id: 18, name: 'Kovalar',                  category: 'temizlik-grubu', image: '/images/temizlik/5.jpg' },
  { id: 19, name: 'Eldiven',                  category: 'temizlik-grubu', image: '/images/temizlik/6.jpg' },
  { id: 20, name: 'Yer Temizlik Havlusu',     category: 'temizlik-grubu', image: '/images/temizlik/7.jpg' },
  { id: 21, name: 'Islak Mendil',             category: 'temizlik-grubu', image: '/images/temizlik/8.jpg' },
  { id: 22, name: 'Oda Kokusu',               category: 'temizlik-grubu', image: '/images/temizlik/9.jpg' },
  { id: 23, name: 'Oda Spreyi',               category: 'temizlik-grubu', image: '/images/temizlik/10.jpg' },
  { id: 24, name: 'Cam Bezi',                 category: 'temizlik-grubu', image: '/images/temizlik/11.jpg' },
  { id: 25, name: 'Yer Bezi',                 category: 'temizlik-grubu', image: '/images/temizlik/12.jpg' },
  { id: 26, name: 'Camsil',                   category: 'temizlik-grubu', image: '/images/temizlik/13.jpg' },

  // Bardak Grubu
  { id: 27, name: 'Plastik Bardaklar',        category: 'bardak-grubu',    image: '/images/bardaklar/1.jpg' },
  { id: 28, name: 'Tek Katlı Karton Bardaklar',category: 'bardak-grubu',   image: '/images/bardaklar/2.jpg' },
  { id: 29, name: 'Milkshake Bardağı',        category: 'bardak-grubu',    image: '/images/bardaklar/3.jpg' },
  { id: 30, name: 'Mika Bardak',              category: 'bardak-grubu',    image: '/images/bardaklar/4.jpg' },

  // Plastik Ürünler
  { id: 31, name: 'Plastik Çatal Bıçak Kaşık',category: 'plastik-urunler', image: '/images/plastik/1.jpg' },
  { id: 32, name: 'Dondurma Kase ve Kapakları',category: 'plastik-urunler', image: '/images/plastik/2.jpg' },
  { id: 33, name: 'Plastik Tabaklar',         category: 'plastik-urunler', image: '/images/plastik/3.jpeg' },
  { id: 34, name: 'Pipet',    category: 'plastik-urunler', image: '/images/plastik/4.jpeg' },

  // Köpük Tabaklar
  { id: 35, name: 'Tek Gözlü Köpük Tabak',    category: 'kopukler',        image: '/images/kopukler/1.jpg' },
  { id: 36, name: '3 Gözlü Köpük Tabak',      category: 'kopukler',        image: '/images/kopukler/2.jpg' },
  { id: 37, name: '4 Gözlü Köpük Tabak',      category: 'kopukler',        image: '/images/kopukler/3.jpg' },
  { id: 38, name: '5 Gözlü Köpük Tabak',      category: 'kopukler',        image: '/images/kopukler/4.jpg' },

  // Mutfak Malzemeleri
  { id: 39, name: 'Streç Film',               category: 'mutfak-grubu',    image: '/images/mutfak/1.jpg' },
  { id: 40, name: 'Streç Film Kesme Aparatı', category: 'mutfak-grubu',    image: '/images/mutfak/2.jpg' },
  { id: 41, name: 'Tahta Karıştırıcı',        category: 'mutfak-grubu',    image: '/images/mutfak/3.jpg' },
  { id: 42, name: 'Kürdan',                   category: 'mutfak-grubu',    image: '/images/mutfak/4.jpg' },
  { id: 43, name: 'Sünger',                   category: 'mutfak-grubu',    image: '/images/mutfak/5.jpg' },
  { id: 44, name: 'Ovma Teli',                category: 'mutfak-grubu',    image: '/images/mutfak/6.jpg' },
  { id: 45, name: 'Kapaklı Karton Çorba Kasesi', category: 'mutfak-grubu', image: '/images/mutfak/7.jpg' },

  // Sızdırmaz Kaplar
  { id: 46, name: '250 cc Sızdırmaz Kap',     category: 'sizdirmaz-grubu', image: '/images/sizdirmaz/1.jpg' },
  { id: 47, name: '375 cc Sızdırmaz Kap',     category: 'sizdirmaz-grubu', image: '/images/sizdirmaz/2.jpg' },
  { id: 48, name: '500 cc Sızdırmaz Kap',     category: 'sizdirmaz-grubu', image: '/images/sizdirmaz/3.jpg' },
  { id: 49, name: '750 cc Sızdırmaz Kap',     category: 'sizdirmaz-grubu', image: '/images/sizdirmaz/4.jpg' },
  { id: 50, name: '1000 cc Sızdırmaz Kap',    category: 'sizdirmaz-grubu', image: '/images/sizdirmaz/5.jpg' },
  { id: 51, name: 'Sızdırmaz Baklava Kabı',   category: 'sizdirmaz-grubu', image: '/images/sizdirmaz/6.jpg' },

  // Etkinlik Malzemeleri
  { id: 52, name: 'Kağıt Masa Örtüsü',        category: 'event-malzemeleri', image: '/images/etkinlik_susler/1.jpg' },
  { id: 53, name: 'Parti Malzemeleri',        category: 'event-malzemeleri', image: '/images/etkinlik_susler/2.jpg' },
  { id: 54, name: 'Doğum Günü Mumları',       category: 'event-malzemeleri', image: '/images/etkinlik_susler/3.jpg' },
  { id: 55, name: 'Balonlar',                 category: 'event-malzemeleri', image: '/images/etkinlik_susler/4.jpg' },
  { id: 56, name: 'Dekoratif Süsler',         category: 'event-malzemeleri', image: '/images/etkinlik_susler/5.jpg' },
  { id: 57, name: 'Plastik Tabak, Bardak, Peçete', category: 'event-malzemeleri', image: '/images/etkinlik_susler/6.jpg' },
  { id: 58, name: '100lük Kına Kesesi',     category: 'event-malzemeleri', image: '/images/etkinlik_susler/7.jpg' },
  { id: 59, name: 'Sünnet Dekorasyonları',    category: 'event-malzemeleri', image: '/images/etkinlik_susler/8.jpg' },
  { id: 60, name: 'Meşale',                   category: 'event-malzemeleri', image: '/images/etkinlik_susler/9.jpg' },
  { id: 61, name: 'Volkan',                   category: 'event-malzemeleri', image: '/images/etkinlik_susler/10.jpg' },
  { id: 62, name: 'Kar Spreyi',               category: 'event-malzemeleri', image: '/images/etkinlik_susler/11.jpg' },
];

// 2) Kategori tanımları
export const CATEGORIES = [
  { slug: 'poset-grubu',        name: 'Poşet Grubu',               image: '/images/kategoriler/1.jpg' },
  { slug: 'kagit-grubu',        name: 'Kağıt Grubu',               image: '/images/kategoriler/2.jpg' },
  { slug: 'temizlik-grubu',     name: 'Temizlik Malz. Grubu',      image: '/images/kategoriler/3.jpg' },
  { slug: 'bardak-grubu',       name: 'Bardak Grubu',              image: '/images/kategoriler/4.jpg' },
  { slug: 'plastik-urunler',    name: 'Plastik Ürünler',           image: '/images/kategoriler/5.jpg' },
  { slug: 'event-malzemeleri',  name: 'Etkinlik Malzemeleri',      image: '/images/kategoriler/6.jpg' },
  { slug: 'kopukler',           name: 'Köpük Tabaklar',            image: '/images/kategoriler/7.jpg' },
  { slug: 'sizdirmaz-grubu',    name: 'Sızdırmaz Kaplar',          image: '/images/kategoriler/8.jpg' },
  { slug: 'mutfak-grubu',       name: 'Mutfak Malzemeleri',        image: '/images/kategoriler/9.jpeg' },
];
