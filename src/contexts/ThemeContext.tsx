import { useEffect, useState } from "react";
import { type Theme, ThemeProviderContext } from "./theme";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const stored = localStorage.getItem(storageKey) as Theme;
      console.log("Initial theme from localStorage:", stored);
      return stored || defaultTheme;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return defaultTheme;
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;
    console.log("ThemeProvider useEffect - theme:", theme);

    root.classList.remove("dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      console.log("System theme detected:", systemTheme);
      if (systemTheme === "dark") {
        root.classList.add("dark");
      }
      return;
    }

    if (theme === "dark") {
      console.log("Adding dark class");
      root.classList.add("dark");
    }
    console.log("Document classes:", root.classList.toString());
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      console.log("setTheme called with:", newTheme);
      try {
        localStorage.setItem(storageKey, newTheme);
        setTheme(newTheme);
        console.log("Theme updated successfully to:", newTheme);
      } catch (error) {
        console.error("Error setting theme:", error);
        setTheme(newTheme); // Still update state even if localStorage fails
      }
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
