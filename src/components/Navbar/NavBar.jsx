import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "../common/ThemeToggle";

const navItems = [
  { label: "Home", path: "/" },
  { label: "All Properties", path: "/properties" },
  { label: "Add Property", path: "/add-property" },
  { label: "My Properties", path: "/my-properties" },
  { label: "My Reviews", path: "/my-reviews" },
];

const getNavLinkClassName = ({ isActive }) =>
  `transition duration-300 hover:text-sky-600 dark:hover:text-sky-300 ${
    isActive
      ? "text-sky-600 dark:text-sky-300"
      : "text-slate-600 dark:text-slate-300"
  }`;

const NavBar = ({ user, isDark, onToggleTheme, onLogout }) => {
  const dropdownRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
      <div className="page-shell">
        <nav className="flex min-h-20 items-center justify-between gap-4">
          <Link to="/" onClick={closeMenus} className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-lg font-semibold text-white shadow-lg shadow-slate-300/40 dark:bg-sky-400 dark:text-slate-950 dark:shadow-sky-950/40">
              H
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
                HomeNest
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                Real Estate
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenus}
                className={getNavLinkClassName}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen((isOpen) => !isOpen)}
                  className="inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/90 px-3 py-2 text-left shadow-sm shadow-slate-200/40 transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 dark:border-slate-700 dark:bg-slate-900/85 dark:shadow-black/20"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                      {user.name}
                    </p>
                    <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                      {user.email}
                    </p>
                  </div>
                  <FiChevronDown className="text-slate-500 dark:text-slate-400" />
                </button>

                {isDropdownOpen ? (
                  <div className="absolute right-0 mt-3 w-64 rounded-3xl border border-slate-200/80 bg-white/95 p-3 shadow-xl shadow-slate-200/40 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/95 dark:shadow-black/30">
                    <div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-800/80">
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {user.name}
                      </p>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {user.email}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        closeMenus();
                        onLogout();
                      }}
                      className="mt-3 w-full rounded-2xl border border-transparent bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-sky-600 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
                    >
                      Logout
                    </button>
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login" onClick={closeMenus} className="secondary-button">
                  Login
                </Link>
                <Link to="/signup" onClick={closeMenus} className="primary-button">
                  Signup
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-700 shadow-sm shadow-slate-200/40 transition duration-300 hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </nav>

        {isMobileMenuOpen ? (
          <div className="mb-4 rounded-[2rem] border border-slate-200/80 bg-white/90 p-5 shadow-xl shadow-slate-200/30 backdrop-blur-xl lg:hidden dark:border-slate-700 dark:bg-slate-900/90 dark:shadow-black/20">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={closeMenus}
                  className={getNavLinkClassName}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-5 border-t border-slate-200 pt-5 dark:border-slate-700">
              {user ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {user.name}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      closeMenus();
                      onLogout();
                    }}
                    className="primary-button w-full justify-center"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link
                    to="/login"
                    onClick={closeMenus}
                    className="secondary-button justify-center"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={closeMenus}
                    className="primary-button justify-center"
                  >
                    Signup
                  </Link>
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default NavBar;
