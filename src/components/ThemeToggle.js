'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="fixed bottom-5 right-5 z-50 p-3 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
      style={{ 
        backgroundColor: 'var(--accent)', 
        color: isDark ? '#111827' : '#f9fafb'
      }}
    >
      {isDark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}
