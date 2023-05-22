import { useCallback, useEffect, useState } from 'react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';

export const ThemeSwitcher = () => {
  const [mode, setMode] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');

    if (isDark) setMode('dark');
    else setMode('light');
  }, []);

  const toggleMode = useCallback(() => {
    setMode((prev) => {
      if (prev === 'light') {
        localStorage.setItem('mode', 'dark');
        document.documentElement.classList.add('dark');
        return 'dark';
      }

      localStorage.setItem('mode', 'light');
      document.documentElement.classList.remove('dark');
      return 'light';
    });
  }, []);

  const isDark = mode === 'dark';

  return (
    <button onClick={toggleMode} type="button" aria-label="theme switcher">
      {isDark
        ? <IoMdMoon fontSize="20px" className="animate-pulse text-slate-400" />
        : <IoMdSunny fontSize="20px" className="animate-spin-slow text-yellow-500" />}
    </button>
  );
};
