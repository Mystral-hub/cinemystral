import { useEffect, useState } from "react";

export const ThemeToggleBtn = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || true,
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div>
      <button
        type="button"
        className="mx-5 p-2 rounded-md bg-slate-800 text-slate-100 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
        aria-label="Toggle theme"
        onClick={() => setIsDark((prev) => !prev)}>
        {isDark ? (
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5" />
            <line
              x1="12"
              y1="1"
              x2="12"
              y2="3"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="12"
              y1="21"
              x2="12"
              y2="23"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="4.22"
              y1="4.22"
              x2="5.64"
              y2="5.64"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="18.36"
              y1="18.36"
              x2="19.78"
              y2="19.78"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="1"
              y1="12"
              x2="3"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="21"
              y1="12"
              x2="23"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="4.22"
              y1="19.78"
              x2="5.64"
              y2="18.36"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="18.36"
              y1="5.64"
              x2="19.78"
              y2="4.22"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>
    </div>
  );
};
