(function checkMode() {
  try {
    const root = document.documentElement;

    const darkMode = localStorage.getItem('mode');

    if (darkMode === null) {
      const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (prefersDarkMode) {
        root.classList.add('dark');
        localStorage.setItem('mode', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('mode', 'light');
      }
    } else if (darkMode === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('mode', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('mode', 'light');
    }

    // check if user prefers dark mode
  } catch (error) {
    console.error(error);
  }
}());
