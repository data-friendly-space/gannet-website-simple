"use client";

import { useTheme } from './ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors ${
        theme === 'dark' 
          ? 'bg-gannetCardBg text-yellow-400 hover:bg-gannetCardBg/80' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'dark' ? (
        <FiSun className="h-5 w-5" />
      ) : (
        <FiMoon className="h-5 w-5" />
      )}
    </button>
  );
} 