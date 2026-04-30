import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import LoadingSpinner from "../common/LoadingSpinner";
import SectionHeading from "../common/SectionHeading";
import PropertyCard from "./PropertyCard";

const FeaturedPropertiesSection = ({ properties, isLoading }) => {
  return (
    <section className="page-shell py-20">
      <SectionHeading
        eyebrow="Featured Properties"
        title="Fresh listings curated for modern buyers"
        description="Discover six of the newest homes and spaces on HomeNest, carefully selected for quality, location, and presentation."
        action={
          <Link to="/properties" className="secondary-button">
            Explore all
            <FiArrowRight />
          </Link>
        }
      />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedPropertiesSection;
