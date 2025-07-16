// src/components/Footer.jsx
'use client';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
        <a href="mailto:bayazitbaran@hotmail.com" className="hover:underline">
          bayazitbaran@hotmail.com
        </a>
        <span>|</span>
        <a href="tel:02626464140" className="hover:underline">
          0262 646 4140
        </a>
      </div>
    </footer>
  );
}
