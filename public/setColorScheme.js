// eslint-disable-next-line func-names
(function () {
  try {
    const mode = localStorage.getItem("sz-portfolio-scheme");
    const supportDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches === true;

    if (!mode && supportDarkMode) {
      return document.documentElement.classList.add("dark");
    }

    return document.documentElement.classList.add(mode);
  } catch (e) {
    return e;
  }
}());
