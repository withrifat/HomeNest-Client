import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FiArrowRight, FiMapPin, FiSearch } from "react-icons/fi";
import { heroSlides, priceRanges, propertyTypes } from "../../data/homeData";

const defaultFilters = {
  location: "Dhaka",
  propertyType: "Any Type",
  priceRange: "Any Budget",
};

const HeroSection = () => {
  const navigate = useNavigate();
  const [activeSlideId, setActiveSlideId] = useState(heroSlides[0].id);
  const [searchFilters, setSearchFilters] = useState(defaultFilters);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlideId((currentSlideId) => {
        const currentSlideIndex = heroSlides.findIndex(
          (slide) => slide.id === currentSlideId
        );
        const nextSlideIndex = (currentSlideIndex + 1) % heroSlides.length;

        return heroSlides[nextSlideIndex].id;
      });
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setSearchFilters((currentFilters) => ({
      ...currentFilters,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const searchParams = new URLSearchParams({
      location: searchFilters.location,
      propertyType: searchFilters.propertyType,
      priceRange: searchFilters.priceRange,
    });

    navigate(`/properties?${searchParams.toString()}`);
  };

  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0">
        {heroSlides.map((slide) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              activeSlideId === slide.id ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={activeSlideId !== slide.id}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-900/30" />
      </div>

      <div className="page-shell relative z-10 flex min-h-[80vh] items-center pb-14">
        <div className="grid w-full gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
              <FiMapPin className="text-sky-300" />
              Trusted homes across Dhaka, Chittagong, and Sylhet
            </div>

            {heroSlides.map((slide) =>
              activeSlideId === slide.id ? (
                <div key={slide.id} className="mt-6">
                  <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                    {slide.subtitle}
                  </p>
                </div>
              ) : null
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/properties" className="primary-button">
                Browse listings
                <FiArrowRight />
              </Link>
              <Link
                to="/add-property"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/15"
              >
                Add your property
              </Link>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-10 grid gap-4 rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-slate-950/20 backdrop-blur-xl md:grid-cols-2 xl:grid-cols-[1.1fr_0.85fr_0.95fr_auto]"
            >
              <label className="rounded-2xl bg-white/90 px-4 py-3 text-slate-900 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Location
                </span>
                <input
                  type="text"
                  name="location"
                  value={searchFilters.location}
                  onChange={handleInputChange}
                  placeholder="Search by city or area"
                  className="mt-2 w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
              </label>

              <label className="rounded-2xl bg-white/90 px-4 py-3 text-slate-900 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Property Type
                </span>
                <select
                  name="propertyType"
                  value={searchFilters.propertyType}
                  onChange={handleInputChange}
                  className="mt-2 w-full bg-transparent text-sm outline-none"
                >
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label className="rounded-2xl bg-white/90 px-4 py-3 text-slate-900 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Price Range
                </span>
                <select
                  name="priceRange"
                  value={searchFilters.priceRange}
                  onChange={handleInputChange}
                  className="mt-2 w-full bg-transparent text-sm outline-none"
                >
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </label>

              <button type="submit" className="primary-button h-full justify-center">
                <FiSearch />
                Search
              </button>
            </form>
          </div>

          <div className="glass-panel hidden p-6 lg:block">
            {heroSlides.map((slide) =>
              activeSlideId === slide.id ? (
                <div key={slide.id}>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-300">
                    Market Pulse
                  </p>
                  <div className="mt-6 grid gap-5">
                    <div className="rounded-[1.75rem] bg-slate-900 px-6 py-7 text-white dark:bg-slate-800">
                      <p className="text-sm text-slate-300">{slide.statLabel}</p>
                      <p className="mt-2 text-4xl font-semibold">{slide.statValue}</p>
                    </div>
                    <div className="rounded-[1.75rem] bg-slate-50 p-6 dark:bg-slate-800/80">
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Buyer confidence score
                      </p>
                      <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
                        98%
                      </p>
                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        Carefully curated inventory, responsive owners, and a
                        search experience designed for real decision-making.
                      </p>
                    </div>
                  </div>
                </div>
              ) : null
            )}

            <div className="mt-6 flex items-center gap-2">
              {heroSlides.map((slide) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveSlideId(slide.id)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeSlideId === slide.id
                      ? "w-10 bg-sky-500"
                      : "w-2.5 bg-slate-300 dark:bg-slate-600"
                  }`}
                  aria-label={`Show slide ${slide.id}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
