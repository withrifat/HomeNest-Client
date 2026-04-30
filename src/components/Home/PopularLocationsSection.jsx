import { popularLocations } from "../../data/homeData";
import SectionHeading from "../common/SectionHeading";
import LocationCard from "./LocationCard";

const PopularLocationsSection = () => {
  return (
    <section className="page-shell py-20">
      <SectionHeading
        eyebrow="Popular Locations"
        title="Explore neighborhoods buyers keep coming back to"
        description="From the energy of Dhaka to the scenic calm of Sylhet, discover standout locations with strong demand and premium living options."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {popularLocations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </section>
  );
};

export default PopularLocationsSection;
