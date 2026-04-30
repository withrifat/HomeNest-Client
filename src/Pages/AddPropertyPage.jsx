import { useState } from "react";
import { useOutletContext } from "react-router";
import AuthPromptCard from "../components/common/AuthPromptCard";
import PageIntro from "../components/common/PageIntro";
import { propertyTypes } from "../data/homeData";

const initialFormState = {
  title: "",
  location: "",
  category: "Apartment",
  price: "",
  description: "",
};

const AddPropertyPage = () => {
  const { user } = useOutletContext();
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState((currentFormState) => ({
      ...currentFormState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="pb-16">
      <PageIntro
        eyebrow="Add Property"
        title="Create a polished listing that feels ready for buyers"
        description="This demo page is styled like a production listing form and is ready to connect to your backend later."
      />

      <section className="page-shell">
        {!user ? (
          <AuthPromptCard
            title="Sign in to publish your listing"
            description="Owners need an account before adding a new property so HomeNest can protect listing quality and ownership details."
          />
        ) : (
          <div className="soft-card p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Property title
                </span>
                <input
                  type="text"
                  name="title"
                  value={formState.title}
                  onChange={handleChange}
                  placeholder="Ex: Elegant family apartment in Banani"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 dark:border-slate-700 dark:bg-slate-900"
                  required
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Location
                </span>
                <input
                  type="text"
                  name="location"
                  value={formState.location}
                  onChange={handleChange}
                  placeholder="Ex: Gulshan, Dhaka"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 dark:border-slate-700 dark:bg-slate-900"
                  required
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Category
                </span>
                <select
                  name="category"
                  value={formState.category}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 dark:border-slate-700 dark:bg-slate-900"
                >
                  {propertyTypes
                    .filter((type) => type !== "Any Type")
                    .map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                </select>
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Asking price
                </span>
                <input
                  type="text"
                  name="price"
                  value={formState.price}
                  onChange={handleChange}
                  placeholder="Ex: BDT 1.65 Crore"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 dark:border-slate-700 dark:bg-slate-900"
                  required
                />
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Listing description
                </span>
                <textarea
                  name="description"
                  value={formState.description}
                  onChange={handleChange}
                  placeholder="Share the standout features, nearby amenities, and what makes this property special."
                  rows="5"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 dark:border-slate-700 dark:bg-slate-900"
                  required
                />
              </label>

              <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Owner profile: {user.name} ({user.email})
                </p>
                <button type="submit" className="primary-button">
                  Save draft listing
                </button>
              </div>
            </form>

            {isSubmitted ? (
              <div className="mt-6 rounded-[1.5rem] bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                Draft saved. This page is ready for API integration when you add
                your backend submission flow.
              </div>
            ) : null}
          </div>
        )}
      </section>
    </main>
  );
};

export default AddPropertyPage;
