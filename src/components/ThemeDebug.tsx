import { useTheme } from "../hooks/useTheme";
import { useEffect, useState } from "react";

export default function ThemeDebug() {
  const { theme, setTheme } = useTheme();
  const [docClasses, setDocClasses] = useState("");

  useEffect(() => {
    const updateClasses = () => {
      setDocClasses(document.documentElement.className);
    };

    updateClasses();
    const observer = new MutationObserver(updateClasses);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-4 left-4 bg-card border border-border p-4 rounded-lg z-50 min-w-[300px]">
      <div className="text-sm">
        <p>
          Current theme: <strong className="text-primary">{theme}</strong>
        </p>
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => {
              console.log("Debug button clicked: light");
              setTheme("light");
            }}
            className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs"
          >
            Light
          </button>
          <button
            onClick={() => {
              console.log("Debug button clicked: dark");
              setTheme("dark");
            }}
            className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs"
          >
            Dark
          </button>
          <button
            onClick={() => {
              console.log("Debug button clicked: system");
              setTheme("system");
            }}
            className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs"
          >
            System
          </button>
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          <p>
            Document classes:{" "}
            <code className="text-xs">{docClasses || "none"}</code>
          </p>
          <p>
            Background:{" "}
            <span className="inline-block w-4 h-4 bg-background border border-border rounded ml-1"></span>
          </p>
        </div>
      </div>
    </div>
  );
}
