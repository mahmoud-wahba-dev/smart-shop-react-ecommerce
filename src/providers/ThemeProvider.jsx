import { createContext, useContext, useEffect, useState } from "react";

const LIGHT_THEME = "app-light";
const DARK_THEME = "app-dark";

const ThemeContext = createContext(null);

const getStoredTheme = () => {
  if (typeof window === "undefined") {
    return LIGHT_THEME;
  }

  const storedTheme = window.localStorage.getItem("theme");
  return storedTheme === DARK_THEME ? DARK_THEME : LIGHT_THEME;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getStoredTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME,
    );
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
    LIGHT_THEME,
    DARK_THEME,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};