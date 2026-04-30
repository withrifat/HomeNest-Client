import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";

const LocationCard = ({ location }) => {
  return (
    <Link
      to={`/properties?location=${encodeURIComponent(location.name)}`}
      className="group relative block min-h-[340px] overflow-hidden rounded-[2rem] shadow-xl shadow-slate-200/30"
    >
      <img
        src={location.image}
        alt={location.name}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="text-sm uppercase tracking-[0.26em] text-sky-300">
          Popular Location
        </p>
        <div className="mt-3 flex items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold">{location.name}</h3>
            <p className="mt-2 text-sm text-slate-200">{location.propertyCount}</p>
          </div>
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 transition duration-300 group-hover:bg-white/20">
            <FiArrowRight />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default LocationCard;
