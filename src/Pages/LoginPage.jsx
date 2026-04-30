import { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router";
import PageIntro from "../components/common/PageIntro";

const LoginPage = () => {
  const navigate = useNavigate();
  const { user, onDemoLogin, onLogout } = useOutletContext();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials((currentCredentials) => ({
      ...currentCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = credentials.email.trim() || "nazia@homenest.com";
    const localName = email.split("@")[0];
    const name =
      localName
        .split(".")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ") || "HomeNest User";

    onDemoLogin({ name, email });
    navigate("/");
  };

  return (
    <main className="pb-16">
      <PageIntro
        eyebrow="Login"
        title="Welcome back to HomeNest"
        description="Use this polished demo login to preview how authenticated navigation and owner pages behave before backend auth is connected."
      />

      <section className="page-shell">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="soft-card p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-300">
              Demo Access
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">
              Sign in to unlock owner actions
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Once signed in, the navbar swaps to an avatar dropdown and the
              owner-focused routes become personalized.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>Publish new property drafts</li>
              <li>Review listing performance</li>
              <li>Preview owner review cards</li>
            </ul>
          </div>

          <div className="soft-card p-8 sm:p-10">
            {user ? (
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  You’re already signed in
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                  Logged in as {user.name} ({user.email}).
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link to="/" className="primary-button">
                    Return home
                  </Link>
                  <button type="button" onClick={onLogout} className="secondary-button">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    placeholder="nazia@homenest.com"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 dark:border-slate-700 dark:bg-slate-900"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Enter any password for demo mode"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 dark:border-slate-700 dark:bg-slate-900"
                  />
                </div>
                <button type="submit" className="primary-button w-full justify-center">
                  Continue as demo user
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
