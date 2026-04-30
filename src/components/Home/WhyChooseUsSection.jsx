import {
  FiCheckCircle,
  FiLock,
  FiSearch,
  FiShield,
} from "react-icons/fi";
import SectionHeading from "../common/SectionHeading";
import { whyChooseUs } from "../../data/homeData";

const iconMap = {
  trusted: FiShield,
  search: FiSearch,
  verified: FiCheckCircle,
  secure: FiLock,
};

const WhyChooseUsSection = () => {
  return (
    <section className="page-shell py-20">
      <div className="glass-panel px-6 py-10 sm:px-10 sm:py-14">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built to make home discovery feel clear and dependable"
          description="HomeNest focuses on trust, speed, and a polished browsing experience so buyers and owners can move with confidence."
          align="left"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseUs.map((feature) => {
            const Icon = iconMap[feature.icon];

            return (
              <article
                key={feature.id}
                className="rounded-[1.75rem] border border-slate-200/70 bg-white/85 p-6 shadow-lg shadow-slate-200/30 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/85 dark:shadow-black/20"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 dark:bg-sky-500/15 dark:text-sky-300">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
