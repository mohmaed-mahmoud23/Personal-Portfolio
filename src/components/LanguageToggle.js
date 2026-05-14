'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';

export function LanguageToggle() {
  const pathname = usePathname() || '/en';

  const toggleLanguage = () => {
    let newPath = pathname;
    if (pathname.startsWith('/ar')) {
      newPath = pathname.replace(/^\/ar/, '/en');
    } else if (pathname.startsWith('/en')) {
      newPath = pathname.replace(/^\/en/, '/ar');
    } else {
      newPath = '/ar' + pathname;
    }
    window.location.href = newPath;
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-20 right-5 z-50 p-3 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 font-bold text-sm"
      style={{ backgroundColor: 'var(--text-color)', color: 'var(--bg-color)', width: '48px', height: '48px' }}
    >
      {pathname.startsWith('/ar') ? 'EN' : 'AR'}
    </button>
  );
}
