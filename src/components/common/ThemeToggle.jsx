import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-700 shadow-sm shadow-slate-200/50 transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:shadow-black/20 dark:hover:border-sky-400 dark:hover:text-sky-300"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
};

export default ThemeToggle;
