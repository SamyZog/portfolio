import {
  DARK_SCHEME_CLASS,
  LIGHT_SCHEME_CLASS,
  SCHEME_LS_KEY,
} from "constants/index.mjs";
import { useEffect, useState } from "react";

const useColorScheme = () => {
  const [dark, setDark] = useState();

  useEffect(() => {
    const storedScheme = localStorage.getItem(SCHEME_LS_KEY);

    document.documentElement.classList.add(storedScheme || DARK_SCHEME_CLASS);
    setDark(document.documentElement.className === DARK_SCHEME_CLASS);
  }, []);

  const toggleScheme = () => {
    const currentClass = document.documentElement.className;

    const newClass = currentClass === DARK_SCHEME_CLASS ? LIGHT_SCHEME_CLASS : DARK_SCHEME_CLASS;

    document.documentElement.classList.add(newClass);
    document.documentElement.classList.remove(currentClass);

    localStorage.setItem(SCHEME_LS_KEY, newClass);

    setDark(document.documentElement.classList.contains(DARK_SCHEME_CLASS));
  };

  return { dark, toggleScheme };
};

export default useColorScheme;
