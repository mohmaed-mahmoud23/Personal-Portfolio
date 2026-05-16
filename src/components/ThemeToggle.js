'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed bottom-5 right-5 z-50 p-3 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
      style={{ 
        backgroundColor: 'var(--accent)', 
        color: theme === 'dark' ? '#111827' : '#f9fafb'
      }}
    >
      {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}
