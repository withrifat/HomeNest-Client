import { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router";
import PageIntro from "../components/common/PageIntro";

const SignupPage = () => {
  const navigate = useNavigate();
  const { user, onDemoLogin } = useOutletContext();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState((currentFormState) => ({
      ...currentFormState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.password !== formState.confirmPassword) {
      setErrorMessage("Passwords do not match. Please try again.");
      return;
    }

    setErrorMessage("");
    onDemoLogin({
      name: formState.name.trim() || "New HomeNest User",
      email: formState.email.trim() || "newuser@homenest.com",
    });
    navigate("/");
  };

  return (
    <main className="pb-16">
      <PageIntro
        eyebrow="Signup"
        title="Create your HomeNest account"
        description="This demo signup flow lets you preview the logged-in experience and gives your homepage the polished routing expected in a real product."
      />

      <section className="page-shell">
        <div className="mx-auto max-w-3xl soft-card p-8 sm:p-10">
          {user ? (
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Your account is ready
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                You’re signed in as {user.name}. Head back home to explore the
                owner experience.
              </p>
              <Link to="/" className="primary-button mt-6">
                Go to homepage
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Full name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Ex: Farzana Kabir"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 dark:border-slate-700 dark:bg-slate-900"
                />
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Email address
                </span>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="farzana@homenest.com"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 dark:border-slate-700 dark:bg-slate-900"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Password
                </span>
                <input
                  type="password"
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 dark:border-slate-700 dark:bg-slate-900"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Confirm password
                </span>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formState.confirmPassword}
                  onChange={handleChange}
                  placeholder="Repeat the password"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 dark:border-slate-700 dark:bg-slate-900"
                />
              </label>

              {errorMessage ? (
                <p className="md:col-span-2 rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-600 dark:bg-rose-500/10 dark:text-rose-300">
                  {errorMessage}
                </p>
              ) : null}

              <button type="submit" className="primary-button md:col-span-2 justify-center">
                Create demo account
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default SignupPage;
