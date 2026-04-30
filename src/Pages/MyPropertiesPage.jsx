import { useOutletContext } from "react-router";
import AuthPromptCard from "../components/common/AuthPromptCard";
import LoadingSpinner from "../components/common/LoadingSpinner";
import PageIntro from "../components/common/PageIntro";
import PropertyCard from "../components/Home/PropertyCard";
import useProperties from "../Hooks/useProperties";

const MyPropertiesPage = () => {
  const { user } = useOutletContext();
  const { properties, isLoading } = useProperties(3);

  return (
    <main className="pb-16">
      <PageIntro
        eyebrow="My Properties"
        title="Manage your active listings with clarity"
        description="Keep track of your best-performing homes, review listing presentation, and prepare for future property management features."
      />

      <section className="page-shell">
        {!user ? (
          <AuthPromptCard
            title="Login to view your listings"
            description="HomeNest keeps owner dashboards personal, so you’ll need to sign in before reviewing your published or draft properties."
          />
        ) : isLoading ? (
          <LoadingSpinner label="Loading your saved listings..." />
        ) : (
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="soft-card p-6">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Active listings
                </p>
                <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
                  03
                </p>
              </div>
              <div className="soft-card p-6">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  New inquiries
                </p>
                <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
                  18
                </p>
              </div>
              <div className="soft-card p-6">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Avg. response time
                </p>
                <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
                  2h 14m
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default MyPropertiesPage;
