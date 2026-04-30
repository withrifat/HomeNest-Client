import { Link } from "react-router";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { LuBath, LuBedDouble } from "react-icons/lu";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { formatPropertyPrice } from "../../Utils/propertyHelpers";

const PropertyCard = ({ property }) => {
  return (
    <article className="soft-card group overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-4 top-4 flex items-center justify-between">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900">
            {property.category}
          </span>
          <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            Latest
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 transition group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-300">
              {property.title}
            </h3>
            <p className="mt-3 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <FiMapPin className="text-sky-500" />
              {property.location}
            </p>
          </div>
          <p className="text-right text-lg font-semibold text-slate-900 dark:text-white">
            {formatPropertyPrice(property)}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 rounded-[1.5rem] bg-slate-50 p-4 text-sm dark:bg-slate-800/80">
          <p className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <LuBedDouble className="text-sky-500" />
            {property.bedrooms || "N/A"} bed
          </p>
          <p className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <LuBath className="text-sky-500" />
            {property.bathrooms} bath
          </p>
          <p className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <HiOutlineSquares2X2 className="text-sky-500" />
            {property.area}
          </p>
        </div>

        <Link
          to={`/properties?location=${encodeURIComponent(property.location)}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-sky-600 dark:text-white dark:hover:text-sky-300"
        >
          View Details
          <FiArrowRight />
        </Link>
      </div>
    </article>
  );
};

export default PropertyCard;
