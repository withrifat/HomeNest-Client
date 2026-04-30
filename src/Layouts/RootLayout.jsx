import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navbar/NavBar";
import useTheme from "../Hooks/useTheme";

const USER_STORAGE_KEY = "homenest-demo-user";

const demoUser = {
  name: "Nazia Rahman",
  email: "nazia@homenest.com",
  avatar: "https://i.pravatar.cc/120?img=32",
};

const getStoredUser = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const storedUser = window.localStorage.getItem(USER_STORAGE_KEY);

  return storedUser ? JSON.parse(storedUser) : null;
};

const RootLayout = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const [user, setUser] = useState(getStoredUser);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (user) {
      window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } else {
      window.localStorage.removeItem(USER_STORAGE_KEY);
    }
  }, [user]);

  const handleDemoLogin = (overrides = {}) => {
    setUser({
      ...demoUser,
      ...overrides,
      avatar: overrides.avatar ?? demoUser.avatar,
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <NavBar
        user={user}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onLogout={handleLogout}
      />
      <div className="flex-1">
        <Outlet
          context={{
            user,
            onDemoLogin: handleDemoLogin,
            onLogout: handleLogout,
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
