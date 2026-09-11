import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

export type ColorVariant =
  | "primary"
  | "neutral"
  | "background"
  | "foreground"
  | "danger"
  | "warning"
  | "success"
  | "contrast"
  | "matter";

const getColors = (theme: ThemeMode) => {
  const isDark = theme === "dark";
  return {
    primary: isDark ? "#3dbaa5" : "#309c8a",
    neutral: isDark ? "#8e929b" : "#83878f",
    background: isDark ? "#16181e" : "#f4f5fa",
    foreground: isDark ? "#e4e6eb" : "#52555e",
    danger: isDark ? "#d94a42" : "#b33c34",
    warning: isDark ? "#ebc54e" : "#dbb13e",
    success: isDark ? "#4dbca8" : "#468f7a",
    contrast: isDark ? "#1e2128" : "#ffffff",
    matter: isDark ? "#252830" : "#f5f6f8",
  };
};
export const useColorScheme = () => {
  const key = "COLOR-SCHEME";

  const [scheme, setScheme] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem(key) as ThemeMode | null;
    if (stored === "light" || stored === "dark") return stored;

    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    const isDark = scheme === "dark";

    root.classList.toggle("dark", isDark);
    root.classList.toggle("light", !isDark);

    localStorage.setItem(key, scheme);
  }, [scheme]);

  const toggleTheme = () => {
    setScheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const setTheme = (theme: ThemeMode) => {
    setScheme(theme);
  };

  const colors = getColors(scheme);

  return {
    scheme,
    setScheme,
    toggleTheme,
    setTheme,
    colors,
    isLight: scheme === "light",
  };
};
