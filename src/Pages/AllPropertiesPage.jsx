import { Link, useSearchParams } from "react-router";
import PageIntro from "../components/common/PageIntro";
import LoadingSpinner from "../components/common/LoadingSpinner";
import PropertyCard from "../components/Home/PropertyCard";
import useProperties from "../Hooks/useProperties";
import { filterProperties } from "../Utils/propertyHelpers";

const AllPropertiesPage = () => {
  const [searchParams] = useSearchParams();
  const { properties, isLoading } = useProperties();

  const filters = {
    location: searchParams.get("location") ?? "",
    propertyType: searchParams.get("propertyType") ?? "Any Type",
    priceRange: searchParams.get("priceRange") ?? "Any Budget",
  };

  const filteredProperties = filterProperties(properties, filters);

  return (
    <main className="pb-16">
      <PageIntro
        eyebrow="All Properties"
        title="Browse homes and spaces tailored to your next move"
        description="Use the search filters from the homepage or explore the latest listings across trusted locations and property categories."
      >
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            Location: {filters.location || "Any"}
          </span>
          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            Type: {filters.propertyType}
          </span>
          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            Budget: {filters.priceRange}
          </span>
        </div>
      </PageIntro>

      <section className="page-shell">
        {isLoading ? (
          <LoadingSpinner label="Loading the latest HomeNest properties..." />
        ) : filteredProperties.length ? (
          <>
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Showing {filteredProperties.length} properties
              </p>
              <Link to="/properties" className="secondary-button">
                Reset filters
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </>
        ) : (
          <div className="soft-card p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              No properties matched your filters
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
              Try broadening the location, choosing a wider budget range, or
              resetting the search to see the full set of listings.
            </p>
            <Link to="/properties" className="primary-button mt-6">
              View all properties
            </Link>
          </div>
        )}
      </section>
    </main>
  );
};

export default AllPropertiesPage;
